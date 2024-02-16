import { useState } from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import styled from 'styled-components';
import { postCheckDuplicateId } from '~/api/signUp';
import Divider from '~/components/common/Divider';
import { Input } from '~/components/common/Input';
import { ThemeButton } from '~/components/common/ThemeButton';
import { SignUpBasicInfo } from '~/types/apis/signUp';
import { SignUpHeader } from '../SignUpHeader';
import { BASIC_INFO_VALIDATION } from './validation.const';

interface BasicInfoProps {
  onNext: (args: SignUpBasicInfo) => void;
}

export type BasicInfoForm = Omit<SignUpBasicInfo, 'birthSex'> & { birth: string; sex: string };
export default function BasicInfo({ onNext }: BasicInfoProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<BasicInfoForm>();
  const [pwConfirm, setPwConfirm] = useState('');

  const [idChecked, setIdChecked] = useState(false);

  const userId = useWatch({
    control,
    name: 'userId',
  });

  const handleCheckDuplicateId = () => {
    postCheckDuplicateId(userId).then(async (res) => {
      if (res.exception && res.exception.errorCode === 'ID_ALREADY_EXIST') {
        setIdChecked(false);
        alert('이미 사용 중인 아이디입니다.');
      } else if (res.message) {
        setIdChecked(true);
      }
    });
  };

  const onSubmit: SubmitHandler<BasicInfoForm> = (data) => {
    const { birth, sex, ...restData } = data;
    onNext({ ...restData, birthSex: birth + sex });
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
            register={{
              ...register('userId', {
                ...BASIC_INFO_VALIDATION.userId,
                validate: () => idChecked || '이미 사용 중인 아이디입니다.',
              }),
            }}
            error={errors.userId}
          />
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
            register={{ ...register('userPw', BASIC_INFO_VALIDATION.userPw) }}
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
            register={{ ...register('name', BASIC_INFO_VALIDATION.name) }}
            error={errors.name}
          />
        </InputRow>
        <InputRow>
          <Label htmlFor="phoneNumber">연락처</Label>
          <Input
            id="phoneNumber"
            register={{ ...register('phoneNumber', { required: '연락처로 본인인증을 해주세요.' }) }}
            error={errors.phoneNumber}
          />
        </InputRow>
        <InputRow>
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            register={{ ...register('email', BASIC_INFO_VALIDATION.email) }}
            error={errors.email}
          />
        </InputRow>
        <InputRow>
          <Label>생년월일 및 성별</Label>
          <Input
            id="birth"
            register={{ ...register('birth', BASIC_INFO_VALIDATION.birth) }}
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
            register={{ ...register('sex', BASIC_INFO_VALIDATION.sex) }}
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
