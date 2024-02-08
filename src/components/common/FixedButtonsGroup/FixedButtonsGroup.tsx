import { IoIosArrowUp } from 'react-icons/io';
import styled from 'styled-components';

export default function FixedButtonsGroup() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button onClick={scrollToTop}>
      <div>
        <IoIosArrowUp size={22} />
      </div>
    </Button>
  );
}

const Button = styled.button`
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.2rem;
  height: 3.6rem;
  right: 2rem;
  bottom: 7rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.gray['500']};
  border: solid 1px ${({ theme }) => theme.colors.gray['200']};
  background-color: rgba(255, 255, 255, 0.8);
`;
