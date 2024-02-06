import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { VscChromeClose } from 'react-icons/vsc';
import styled from 'styled-components';
import e1 from '~/shared/pics/nail/E/E1.jpg';

export default function Search({ closeModal }: { closeModal: () => void }) {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleKeywordChange = (e) => {
    const text = e.target.value;
    setKeyword(text);
  };
  const handleSearch = () => {
    navigate('/search', {
      state: {
        keyword: keyword,
      },
    });
    closeModal();
  };
  return (
    <Background>
      <IconWrap>
        <VscChromeClose
          onClick={closeModal}
          size="30"
        />
      </IconWrap>
      <Hang>
        <Input
          value={keyword} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
          placeholder="  검색어를 입력하세요"
          onChange={handleKeywordChange} // 입력 필드 값이 변경될 때 핸들러 호출
        />
        <PiMagnifyingGlass
          onClick={handleSearch}
          size="30"
          color="black"
        />
      </Hang>
      <Hang1>
        <Label>#가을네일</Label>
        <Label>#마블네일</Label>
        <Label>#손톱측정</Label>
      </Hang1>
    </Background>
  );
}

const Hang1 = styled.div`
  padding: 5px 0px;
  align-items: center;
  display: flex;
  align-items: center;
  margin: 10px 16px;
  justify-content: center;
  gap: 6px;
`;

const Label = styled.div`
  font-weight: 600;
  border: solid 1.5px black;
  border-radius: 20px;
  display: block;
  padding: 5px 10px;
`;

const IconWrap = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
`;

const Input = styled.input`
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[600]};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
  font-weight: 600;
  height: 43px;
  width: 75vw;
  padding: 0px 5px;
  margin: 0px 5px;
  background-color: rgb(218, 218, 218, 0);
  border: solid 1px rgb(218, 218, 218, 0);
`;

const Hang = styled.div`
  padding: 5px 0px;
  align-items: center;
  display: flex;
  align-items: center;
  border-bottom: solid 1px;
  margin: 0px 16px;
  justify-content: center;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${e1});
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    background: white;
    z-index: -1;
    inset: 0;
    opacity: 0.7;
  }
`;
