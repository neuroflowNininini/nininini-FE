import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Stepper } from '~/components/common/Stepper';
import { ThemeButton } from '~/components/common/ThemeButton';
import { SignUpHeader } from '../SignUpHeader';

export default function BasicInfo() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sex, setSex] = useState('');
  const [birth, setBirth] = useState('');

  const handleIdChange = (e) => {
    const text = e.target.value;
    setId(text);
  };
  const handlePwChange = (e) => {
    const text = e.target.value;
    setPw(text);
  };
  const handlePwConfirmChange = (e) => {
    const text = e.target.value;
    setPwConfirm(text);
  };
  const handleNameChange = (e) => {
    const text = e.target.value;
    setName(text);
  };
  const handleEmailChange = (e) => {
    const text = e.target.value;
    setEmail(text);
  };
  const handleSexChange = (e) => {
    const text = e.target.value;
    setSex(text);
  };
  const handleBirthChange = (e) => {
    const text = e.target.value;
    setBirth(text);
  };
  const navigate = useNavigate();
  const handleContinue = () => {
    // 특정 링크로 이동
    const signupInfo = {
      id: id,
      pw: pwConfirm,
      name: name,
      email: email,
      sex: sex,
      birth: birth,
    };
    navigate('/likedesign', { state: { signupInfo: signupInfo } });
  };
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Container>
      <TopWrap>
        <SignUpHeader
          totalSteps={4}
          step={2}
        />
        <Hang>
          <Label>아이디</Label>
          <InputBtnWrap>
            <Input1
              value={id} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
              onChange={handleIdChange} // 입력 필드 값이 변경될 때 핸들러 호출
            />
            <ThemeButton
              onClick={() => {}}
              variant="reversed"
              style={{ width: '1rem', color: 'red' }}
            >
              중복확인
            </ThemeButton>
          </InputBtnWrap>
        </Hang>
        <Hang>
          <Label>비밀번호</Label>
          <Input
            value={pw} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
            type="password"
            onChange={handlePwChange} // 입력 필드 값이 변경될 때 핸들러 호출
          />
        </Hang>
        <Hang>
          <div>
            <Label>비밀번호</Label>
            <Label>확인</Label>
          </div>
          <Input
            value={pwConfirm} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
            type="password"
            onChange={handlePwConfirmChange} // 입력 필드 값이 변경될 때 핸들러 호출
          />
        </Hang>
        <Hang>
          <Label>이름</Label>
          <Input
            value={name} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
            onChange={handleNameChange} // 입력 필드 값이 변경될 때 핸들러 호출
          />
        </Hang>
        <Hang>
          <Label>이메일</Label>
          <Input
            value={email} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
            onChange={handleEmailChange} // 입력 필드 값이 변경될 때 핸들러 호출
          />
        </Hang>
        <Hang>
          <Label>성별</Label>
          <InputSex
            onChange={handleSexChange}
            type="radio"
            value="woman"
          />
          <Wrap1>여성</Wrap1>
          <InputSex
            onChange={handleSexChange}
            type="radio"
            value="man"
          />
          <Wrap1>남성</Wrap1>
        </Hang>
        <Hang>
          <Label>생년월일</Label>
          {/* <DatePicker
            dateFormat="yyyy.MM.dd"
            selected={startDate}
            onChange={(date) => setStartDate(date)} /> */}
          <InputWrap>
            <InputY
              onChange={handleBirthChange}
              placeholder="yyyy.mm.dd"
            />
            {/* <Wrap1>년</Wrap1> */}
            {/* <InputMD /><Wrap1>월</Wrap1> */}
            {/* <InputMD /><Wrap1>일</Wrap1> */}
          </InputWrap>
        </Hang>
      </TopWrap>
      <ThemeButton onClick={handleContinue}>회원가입</ThemeButton>
    </Container>
  );
}
const Container = styled.div`
  padding-bottom: 80px;
`;
const InputWrap = styled.div`
  display: flex;
  align-items: center;
`;
const Wrap1 = styled.div`
  margin-left: 3px;
  margin-right: 6px;
`;

const Pick = styled.div`
  border: solid 1px;
`;

const InputSex = styled.input``;
const InputY = styled.input`
  width: 70px;
  border: solid 1px rgb(218, 218, 218);
  height: 30px;
  padding: 0px 10px;
`;
const InputMD = styled.input`
  width: 30px;
  border: solid 1px rgb(218, 218, 218);
  height: 30px;
  padding: 0px 10px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px;
  width: 90px;
  height: 31px;
  margin-left: 5px;
  flex-shrink: 0;
`;

const TopWrap = styled.div`
  bottom: 49px;
  padding: 60px 20px 0px 20px;
  display: flex;
  flex-direction: column;
`;
const Hang = styled.div`
  display: flex;
  padding: 5px 0px;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.smallmedium};
  /* width: 60px; */
`;
const InputBtnWrap = styled.div`
  display: flex;
  width: calc(100vw - 90px);
`;
const Input = styled.input`
  height: 30px;
  padding: 0px 10px;
  border: solid 1px rgb(218, 218, 218);
  flex-grow: 1;
  margin: 0;
`;
const Input1 = styled.input`
  height: 30px;
  padding: 0px 10px;
  border: solid 1px rgb(218, 218, 218);
  width: calc(80vw - 150px);
  margin: 0;
`;
