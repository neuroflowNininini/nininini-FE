import { useState } from 'react';
import styled from 'styled-components';
import { postCheckDuplicateId } from '~/api/signUp';
import Divider from '~/components/common/Divider';
import { Input } from '~/components/common/Input';
import { ThemeButton } from '~/components/common/ThemeButton';
import { SignUpBasicInfo } from '~/types/apis/signUp';
import { SignUpHeader } from '../SignUpHeader';

interface BasicInfoProps {
  onNext: (args: SignUpBasicInfo) => void;
}
export default function BasicInfo({ onNext }: BasicInfoProps) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [sex, setSex] = useState('');

  const handleSexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    if (text.length > 1) {
      return;
    }
    setSex(text);
  };

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    if (text.length > 6) {
      return;
    }
    setPw(text);
  };
  const handleContinue = () => {
    if (pwConfirm !== pw) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    const basicInfo = {
      userId: id,
      userPw: pw,
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      birthSex: birth + sex,
    };
    onNext(basicInfo);
  };

  const [isDuplicateIdChecked, setIsDuplicateIdChecked] = useState(false);
  const handleCheckDuplicateId = () => {
    postCheckDuplicateId(id).then((res) => {
      if (res.exception && res.exception.errorCode === 'ID_ALREADY_EXIST') {
        setIsDuplicateIdChecked(false);
        alert('이미 사용 중인 아이디입니다.');
      } else {
        setIsDuplicateIdChecked(true);
      }
    });
  };

  return (
    <Container>
      <SignUpHeader
        totalSteps={4}
        step={2}
      />
      <FormWrap>
        <InputBtnWrap>
          <Label>아이디</Label>
          <InputBtnWrap>
            <Input
              value={id} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value)} // 입력 필드 값이 변경될 때 핸들러 호출
            />
            {/*TODO - 중복확인 기능 */}
            <ThemeButton
              onClick={handleCheckDuplicateId}
              variant="reversed"
              width="15rem"
              height="100%"
              fontSize={'smallmedium'}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPwConfirm(e.target.value)} // 입력 필드 값이 변경될 때 핸들러 호출
          />
        </InputBtnWrap>
        <InputBtnWrap>
          <Label>이름</Label>
          <Input
            value={name} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} // 입력 필드 값이 변경될 때 핸들러 호출
          />
        </InputBtnWrap>
        <InputBtnWrap>
          <Label>연락처</Label>
          <Input
            value={phoneNumber} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)} // 입력 필드 값이 변경될 때 핸들러 호출
          />
        </InputBtnWrap>
        <InputBtnWrap>
          <Label>이메일</Label>
          <Input
            value={email} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} // 입력 필드 값이 변경될 때 핸들러 호출
          />
        </InputBtnWrap>
        <InputBtnWrap>
          <Label>생년월일 및 성별</Label>
          <Input
            value={birth}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBirth(e.target.value)}
            placeholder="주민번호 앞 6자리"
            style={{ width: '15rem' }}
          />
          <Divider
            length="2rem"
            margin="0 .7rem"
          />
          <Input
            value={sex}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSexChange(e)}
            style={{ width: '5rem' }}
          />
          <PwSymbol>••••••</PwSymbol>
        </InputBtnWrap>
      </FormWrap>
      <ThemeButton
        onClick={handleContinue}
        disabled={!isDuplicateIdChecked}
      >
        다음
      </ThemeButton>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const FormWrap = styled.div`
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

const PwSymbol = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  letter-spacing: 0.5rem;
  margin-left: 1rem;
`;
