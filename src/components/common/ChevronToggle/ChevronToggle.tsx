import { useState } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import styled from 'styled-components';
import theme from '~/styles/theme';

interface ChevronToggleProps {
  label: React.ReactNode;
  children?: React.ReactNode;
  width?: string;
  fontSize?: keyof typeof theme.fontSize;
  fontColor?: string;
  iconColor?: string;
}

export default function ChevronToggle({
  label,
  children,
  width = '100%',
  fontSize = 'medium',
  fontColor = theme.colors.gray['900'],
  iconColor = theme.colors.gray['400'],
}: ChevronToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Container width={width}>
      <LabelToggleWrap>
        <Label
          fontSize={fontSize}
          color={fontColor}
        >
          {label}
        </Label>
        {!isOpen ? (
          <GoChevronDown
            onClick={handleToggleClick}
            size={theme.fontSize[fontSize]}
            color={iconColor}
          />
        ) : (
          <GoChevronUp
            onClick={handleToggleClick}
            size={theme.fontSize[fontSize]}
            color={iconColor}
          />
        )}
      </LabelToggleWrap>
      {isOpen && <ContentsWrap>{children}</ContentsWrap>}
    </Container>
  );
}

const Container = styled.div<Pick<ChevronToggleProps, 'width'>>`
  width: ${({ width }) => width!};
`;

const LabelToggleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.div<Pick<ChevronToggleProps, 'fontSize' | 'fontColor'>>`
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize!]};
  color: ${({ fontColor }) => fontColor};
`;

const ContentsWrap = styled.div`
  margin-top: 1.5rem;
`;
