import styled from 'styled-components';

interface DividerProps {
  direction?: 'horizontal' | 'vertical';
  margin?: string;
  length?: string;
  style?: React.CSSProperties;
}

export default function Divider({
  direction = 'horizontal',
  margin = '1rem',
  length = '100%',
  style,
  ...props
}: DividerProps) {
  const dividerStyle = {
    margin: direction === 'vertical' ? `0 ${margin}` : `${margin} 0`,
  };
  return (
    <Line
      direction={direction}
      length={length}
      style={{ ...dividerStyle, ...style }}
      {...props}
    />
  );
}

const Line = styled.hr<{ direction: DividerProps['direction']; length: string }>`
  border: none;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  ${({ direction, length }) =>
    direction === 'vertical'
      ? `
    position: relative;
    display: inline-block;
    width: 1px;
    height: ${length};
    vertical-align: middle;
  `
      : `
    display: block;
    width: ${length};
    height: 1px;
  `}
`;
