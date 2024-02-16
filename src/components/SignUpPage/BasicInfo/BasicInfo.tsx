import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
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

type BasicInfoForm = Omit<SignUpBasicInfo, 'birthSex'> & { birth: string; sex: string };
export default function BasicInfo({ onNext }: BasicInfoProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicInfoForm>();

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
    // const basicInfo = {
    //   userId: id,
    //   userPw: pw,
    //   name: name,
    //   phoneNumber: phoneNumber,
    //   email: email,
    //   birthSex: birth + sex,
    // };
    // onNext(basicInfo);
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

  const onSubmit: SubmitHandler<BasicInfoForm> = (data) => {
    console.log('data', data);
  };

  return (
    <Container>
      <SignUpHeader
        totalSteps={4}
        step={2}
      />
      <FormWrap onSubmit={handleSubmit(onSubmit)}>
        <InputRow>
          <Label htmlFor="userId">아이디</Label>
          <Input
            id="userId"
            register={{ ...register('userId', { required: '필수 입력 값입니다.' }) }}
            error={errors.userId}
          />
          {/*TODO - 중복확인 기능 */}
          <ThemeButton
            onClick={handleCheckDuplicateId}
            variant="reversed"
            width="15rem"
            height="100%"
            fontSize={'smallmedium'}
            style={{ marginLeft: '3px', padding: '1rem 0' }}
          >
            중복확인
          </ThemeButton>
        </InputRow>
        <InputRow>
          <Label htmlFor="userPw">비밀번호</Label>
          <Input
            id="userPw"
            type="password"
            register={{ ...register('userPw', { required: '필수 입력 값입니다.' }) }}
            error={errors.userPw}
          />
        </InputRow>
        <InputRow>
          <Label>비밀번호 확인</Label>
          <Input
            value={pwConfirm} // 입력 필드의 값은 상태 변수와 바인딩됩니다.
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPwConfirm(e.target.value)} // 입력 필드 값이 변경될 때 핸들러 호출
          />
        </InputRow>
        <InputRow>
          <Label htmlFor="name">이름</Label>
          <Input
            id="name"
            register={{ ...register('name', { required: '필수 입력 값입니다.' }) }}
            error={errors.name}
          />
        </InputRow>
        <InputRow>
          <Label htmlFor="phoneNumber">연락처</Label>
          <Input
            id="phoneNumber"
            register={{ ...register('phoneNumber', { required: '필수 입력 값입니다.' }) }}
            error={errors.phoneNumber}
          />
        </InputRow>
        <InputRow>
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            register={{ ...register('email', { required: '필수 입력 값입니다.' }) }}
            error={errors.email}
          />
        </InputRow>
        <InputRow>
          <Label>생년월일 및 성별</Label>
          <Input
            id="birth"
            register={{ ...register('birth', { required: '필수 입력 값입니다.' }) }}
            error={errors.birth}
            placeholder="주민번호 앞 6자리"
            style={{ width: '15rem' }}
          />
          <Divider
            length="2rem"
            margin="0 .7rem"
          />
          <Input
            id="sex"
            register={{ ...register('sex', { required: '필수 입력 값입니다.' }) }}
            error={errors.sex}
            style={{ width: '5rem' }}
          />
          <PwSymbol>••••••</PwSymbol>
        </InputRow>
        <ThemeButton
          type="submit"
          style={{ marginTop: '3rem' }}
        >
          다음
        </ThemeButton>
      </FormWrap>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.smallmedium};
  min-width: 25%;
`;

const PwSymbol = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  letter-spacing: 0.5rem;
  margin-left: 1rem;
`;
