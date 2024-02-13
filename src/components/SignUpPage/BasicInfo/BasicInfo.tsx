import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Divider from '~/components/common/Divider';
import { Input } from '~/components/common/Input';
import { ThemeButton } from '~/components/common/ThemeButton';
import { SignUpHeader } from '../SignUpHeader';

export default function BasicInfo() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [sex, setSex] = useState<number>();

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
    if (text.length > 1) {
      return;
    }
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

  return (
    <Container>
      <TopWrap>
        <SignUpHeader
          totalSteps={4}
          step={2}
        />
        <FormWrap onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
          <InputBtnWrap>
            <Label>아이디</Label>
            <InputBtnWrap>
              <Input
                value={id} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
                onChange={handleIdChange} // 입력 필드 값이 변경될 때 핸들러 호출
              />
              {/*TODO - 중복확인 기능 */}
              <ThemeButton
                onClick={() => {}}
                variant="reversed"
                width="15rem"
                height="100%"
                style={{ marginLeft: '3px' }}
              >
                중복확인
              </ThemeButton>
            </InputBtnWrap>
          </InputBtnWrap>
          <InputBtnWrap>
            <InputBtnWrap>
              <Label>비밀번호</Label>
              <Input
                value={pw} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
                type="password"
                onChange={handlePwChange} // 입력 필드 값이 변경될 때 핸들러 호출
              />
            </InputBtnWrap>
          </InputBtnWrap>
          <InputBtnWrap>
            <Label>비밀번호 확인</Label>
            <Input
              value={pwConfirm} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
              type="password"
              onChange={handlePwConfirmChange} // 입력 필드 값이 변경될 때 핸들러 호출
            />
          </InputBtnWrap>
          <InputBtnWrap>
            <Label>이름</Label>
            <Input
              value={name} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
              onChange={handleNameChange} // 입력 필드 값이 변경될 때 핸들러 호출
            />
          </InputBtnWrap>
          <InputBtnWrap>
            <Label>이메일</Label>
            <Input
              value={email} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
              onChange={handleEmailChange} // 입력 필드 값이 변경될 때 핸들러 호출
            />
          </InputBtnWrap>
          <InputBtnWrap>
            <Label>주민등록번호</Label>
            <Input
              value={birth}
              onChange={handleBirthChange}
              placeholder="주민번호 앞 6자리"
              style={{ width: '15rem' }}
            />
            <Divider
              length="2rem"
              margin="0 .7rem"
            />
            <Input
              value={sex}
              onChange={handleSexChange}
              style={{ width: '5rem' }}
            />
            <Text>xxxxxx</Text>
          </InputBtnWrap>
        </FormWrap>
      </TopWrap>
      <ThemeButton onClick={handleContinue}>회원가입</ThemeButton>
    </Container>
  );
}
const Container = styled.div``;

const TopWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7rem;
`;

const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputBtnWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.5rem;
`;

const Label = styled.div`
  font-size: ${({ theme }) => theme.fontSize.smallmedium};
  min-width: 25%;
`;

const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSize.smallmedium};
  margin-left: 1rem;
`;
