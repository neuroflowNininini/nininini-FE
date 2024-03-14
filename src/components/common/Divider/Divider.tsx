import styled from 'styled-components';
import { Color } from '~/types/typography';

interface DividerProps {
  direction?: 'horizontal' | 'vertical';
  color?: Color;
  margin?: string;
  length?: string;
  style?: React.CSSProperties;
}

export default function Divider({
  direction = 'horizontal',
  color,
  margin = '1rem',
  length = `${direction === 'horizontal' ? '100%' : '2rem'}`,
  style,
  ...props
}: DividerProps) {
  const dividerStyle = {
    margin: direction === 'vertical' ? `0 ${margin}` : `${margin} 0`,
  };
  return (
    <Line
      direction={direction}
      color={color}
      length={length}
      style={{ ...dividerStyle, ...style }}
      {...props}
    />
  );
}

const Line = styled.hr<{ direction: DividerProps['direction']; color: string; length: string }>`
  border: none;
  background-color: ${({ theme, color }) =>
    color ? theme.colors[color.split('.')[0]][color.split('.')[1]] : theme.colors.gray['300']};
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
