import { useState } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import styled from 'styled-components';
import theme from '~/styles/theme';
import { Color, FontSize } from '~/types/typography';

interface ChevronToggleProps {
  label: React.ReactNode;
  children?: React.ReactNode;
  width?: string;
  fontSize?: FontSize;
  fontColor?: Color;
  iconColor?: Color;
}

export default function ChevronToggle({
  label,
  children,
  width = '100%',
  fontSize = 'medium',
  fontColor,
  iconColor,
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
            color={iconColor ? theme.colors[iconColor] : theme.colors.gray['400']}
          />
        ) : (
          <GoChevronUp
            onClick={handleToggleClick}
            size={theme.fontSize[fontSize]}
            color={iconColor ? theme.colors[iconColor] : theme.colors.gray['400']}
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
  color: ${({ theme, fontColor }) =>
    fontColor ? theme.colors[fontColor] : theme.colors.gray['900']};
`;

const ContentsWrap = styled.div`
  margin-top: 1.5rem;
`;
