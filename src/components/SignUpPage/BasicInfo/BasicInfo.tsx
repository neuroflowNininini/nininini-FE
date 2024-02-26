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

export type BasicInfoForm = Omit<SignUpBasicInfo, 'birthSex'> & {
  birth: string;
  sex: string;
  pwConfirm: string;
};
export default function BasicInfo({ onNext }: BasicInfoProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<BasicInfoForm>();

  const [idChecked, setIdChecked] = useState<boolean | undefined>();

  const userId = useWatch({
    control,
    name: 'userId',
  });
  const userPw = useWatch({
    control,
    name: 'userPw',
  });

  const handleCheckDuplicateId = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    postCheckDuplicateId({
      userId,
      onDuplicate: () => {
        setIdChecked(false);
        alert('이미 사용 중인 아이디입니다.');
      },
      onSuccess: () => {
        setIdChecked(true);
      },
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
                validate: () => {
                  if (idChecked === false) {
                    return '이미 사용 중인 아이디입니다.';
                  } else if (!idChecked) {
                    return '아이디 중복확인이 필요합니다.';
                  }
                },
              }),
            }}
            error={errors.userId}
            showErrorMessage={false}
            message={idChecked ? '멋진 아이디네요. :)' : ''}
          />
          <ThemeButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleCheckDuplicateId(e)}
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
            showErrorMessage={false}
          />
        </InputRow>
        <InputRow>
          <Label htmlFor="pwConfirm">비밀번호 확인</Label>
          <Input
            id="pwConfirm"
            type="password"
            register={{
              ...register('pwConfirm', {
                required: '* 비밀번호 재확인이 필요합니다.',
                validate: (value) =>
                  value === userPw || '* 비밀번호 확인: 비밀번호가 일치하지 않습니다.',
              }),
            }}
            error={errors.pwConfirm}
            showErrorMessage={false}
          />
        </InputRow>
        {(errors.userId || errors.userPw || errors.pwConfirm) && (
          <ErrorMessages>
            {errors.userId && <span>{errors.userId.message}</span>}
            {errors.userPw && <span>{errors.userPw.message}</span>}
            {errors.pwConfirm && <span>{errors.pwConfirm.message}</span>}
          </ErrorMessages>
        )}
        <Spacer />
        <InputRow>
          <Label htmlFor="name">이름</Label>
          <Input
            id="name"
            register={{ ...register('name', BASIC_INFO_VALIDATION.name) }}
            error={errors.name}
            showErrorMessage={false}
          />
        </InputRow>
        <InputRow>
          <Label htmlFor="phoneNumber">연락처</Label>
          <Input
            id="phoneNumber"
            register={{
              ...register('phoneNumber', { required: '* 연락처: 연락처로 본인인증을 해주세요.' }),
            }}
            error={errors.phoneNumber}
            showErrorMessage={false}
          />
        </InputRow>
        <InputRow>
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            register={{ ...register('email', BASIC_INFO_VALIDATION.email) }}
            error={errors.email}
            showErrorMessage={false}
          />
        </InputRow>
        <InputRow>
          <Label>생년월일 및 성별</Label>
          <Input
            id="birth"
            register={{ ...register('birth', BASIC_INFO_VALIDATION.birth) }}
            error={errors.birth}
            showErrorMessage={false}
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
            showErrorMessage={false}
            style={{ width: '5rem' }}
          />
          <PwSymbol>••••••</PwSymbol>
        </InputRow>
        {(errors.name || errors.phoneNumber || errors.email || errors.birth || errors.sex) && (
          <ErrorMessages>
            {errors.name && <span>{errors.name.message}</span>}
            {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
            {errors.email && <span>{errors.email.message}</span>}
            {errors.birth && <span>{errors.birth.message}</span>}
            {errors.sex && <span>{errors.sex.message}</span>}
          </ErrorMessages>
        )}
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

const Spacer = styled.div`
  height: 2rem;
`;

const ErrorMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: red;
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
