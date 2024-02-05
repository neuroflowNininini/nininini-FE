import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import { useRef, useState } from 'react';
import theme from '../../shared/theme';
import { FaCamera } from 'react-icons/fa';

export default function Profile({ closeModal }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // 이미지를 선택했을 때 실행되는 함수
  const handleImageSelect = (event) => {
    const imageFile = event.target.files[0]; // 선택된 파일 가져오기
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile); // 파일을 URL로 변환
      setSelectedImage(imageUrl); // 선택된 이미지로 상태 업데이트
    }
  };
  return (
    <InnerMenu>
      <BlockWrap>
        <TopWrap>
          <BiArrowBack
            onClick={closeModal}
            size="28"
            color="black"
          />
          <div>프로필 관리</div>
          <div>저장</div>
        </TopWrap>
        <ImgBox>
          {selectedImage ? (
            <Img
              src={selectedImage}
              alt="Selected"
            />
          ) : (
            <FaCamera
              size="30px"
              color="white"
            />
          )}
        </ImgBox>
        <input
          type="file"
          accept="image/*"
          id="upload-button"
          style={{ display: 'none' }}
          onChange={handleImageSelect}
        />
        <ContWrap>
          <Tag>이름</Tag>
          <Name>김니니</Name>
          <Tag>성별</Tag>
          <Hang>
            <InputSex
              checked
              type="radio"
              value="woman"
              disabled
            />
            <Wrap1>여성</Wrap1>
            <InputSex
              type="radio"
              value="man"
              disabled
            />
            <Wrap1>남성</Wrap1>
          </Hang>
          <Tag>생년월일</Tag>
          <Name>2000.1.1</Name>
          <Tag>이메일</Tag>
          <Name>example@nininini.com</Name>
          <Tag>관심디자인</Tag>
          <DesignWrap>
            <Design>트렌디 팝</Design>
            <Design>알록달록 큐티</Design>
          </DesignWrap>
          <Tag>손톱 측정 정보</Tag>
          <ContWrap>
            <Cont>- 손톱크기 : 넓이 3.2cm / 높이 3.8cm</Cont>
            <Cont>- 손톱모양 : 라운드</Cont>
          </ContWrap>
        </ContWrap>
      </BlockWrap>
    </InnerMenu>
  );
}
const Cont = styled.div`
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.smallmedium};
  font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  margin-top: 4px;
  display: flex;
`;
const DesignWrap = styled.div`
  display: flex;
  gap: 5px;
`;
const Design = styled.div`
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.smallmedium};
  font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  border: solid 1px #757575;
  border-radius: 8px;
  padding: 10px 10px;
  width: 26vw;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const ContWrap = styled.div`
  padding: 0px 10px;
`;
const Hang = styled.div`
  display: flex;
  padding: 5px 5px;
  align-items: center;
  margin-bottom: 10px;
`;
const Wrap1 = styled.div`
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.medium};
  font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  margin-left: 3px;
  margin-right: 6px;
`;
const InputSex = styled.input``;
const Name = styled.div`
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.medium};
  font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  display: flex;
  border: solid 1px #505050;
  color: #505050;
  border-radius: 5px;
  padding: 5px 10px;
`;

const Tag = styled.div`
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.medium};
  font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  display: flex;
  padding: 12px 0px;
  margin-top: 10px;
  margin-bottom: 5px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #909090;
  margin: auto;
`;

const InnerMenu = styled.div`
  position: fixed;
  z-index: 999;
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
  font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  // overflow-y: auto;
  padding: 0px 0px 10px 0px;
  background: white;
`;
const TopWrap = styled.div`
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.largemedium};
  font-family: ${(props) => theme.fontFamily[props.font] || theme.fontFamily.default};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  font-weight: 600;
  color: #353535;
`;

const BlockWrap = styled.div`
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.small};
  margin: 15px 0px 0px 0px;
  padding: 0px 10px 0px 10px;
  display: block;
`;
