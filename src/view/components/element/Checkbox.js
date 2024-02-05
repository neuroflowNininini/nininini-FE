import styled from 'styled-components';
import theme from '../../../shared/theme';
export default function Checkbox({ children, disabled, checked, onChange }) {
  return (
    <Wrapper>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
