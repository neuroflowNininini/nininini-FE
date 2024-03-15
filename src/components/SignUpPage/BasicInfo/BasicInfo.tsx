import { useEffect, useState } from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import styled from 'styled-components';
import { postCheckDuplicateId } from '~/api/signUp';
import Divider from '~/components/common/Divider';
import { Input } from '~/components/common/Input';
import { ThemeButton } from '~/components/common/ThemeButton';
import { Timer } from '~/components/common/Timer';
import { CONSTANTS } from '~/constants';
import { useCertifyPhoneNumber } from '~/hooks/useCertifyPhoneNumber';
import { useTimer } from '~/hooks/useTimer';
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
  phoneNoConfirm: string;
};
export default function BasicInfo({ onNext }: BasicInfoProps) {
  const {
    register,
    handleSubmit,
    trigger,
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
  const phoneNumber = useWatch({
    control,
    name: 'phoneNumber',
  });

  const { remainSeconds, startTimer } = useTimer(CONSTANTS.CERTIFY_VALID_SECONDS);
  const { isSmsSent, handleGetCertifyNumber } = useCertifyPhoneNumber(phoneNumber!, startTimer);

  const handleCheckDuplicateId = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    postCheckDuplicateId({
      userId,
      onDuplicate: () => {
        setIdChecked(false);
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

  useEffect(() => {
    if (idChecked === undefined) return;
    trigger('userId');
  }, [trigger, idChecked]);

  return (
    <Container>
      <SignUpHeader
        totalSteps={4}
        step={2}
      />
      <FormWrap onSubmit={handleSubmit(onSubmit)}>
        <InputField>
          <Label htmlFor="userId">
            아이디 <span>*</span>
          </Label>
          <Row>
            <Input
              id="userId"
              register={{
                ...register('userId', {
                  ...BASIC_INFO_VALIDATION.userId,
                  validate: () => {
                    if (idChecked === false) {
                      return '* 이미 사용 중인 아이디입니다.';
                    } else if (!idChecked) {
                      return '* 아이디 중복확인이 필요합니다.';
                    }
                    return true;
                  },
                }),
              }}
              placeholder="3자 ~ 10자의 영문, 특수문자 (-, _), 숫자"
              error={errors.userId}
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
          </Row>
        </InputField>
        <InputField>
          <Label htmlFor="userPw">
            비밀번호 <span>*</span>
          </Label>
          <Input
            id="userPw"
            type="password"
            register={{ ...register('userPw', BASIC_INFO_VALIDATION.userPw) }}
            placeholder="5자 ~ 20자의 영문, 특수문자, 숫자 (각 필수)"
            error={errors.userPw}
          />
        </InputField>
        <InputField>
          <Label htmlFor="pwConfirm">
            비밀번호 확인 <span>*</span>
          </Label>
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
          />
        </InputField>
        {(errors.userId || errors.userPw || errors.pwConfirm) && (
          <ErrorMessages>
            {errors.userId && <span>{errors.userId.message}</span>}
            {errors.userPw && <span>{errors.userPw.message}</span>}
            {errors.pwConfirm && <span>{errors.pwConfirm.message}</span>}
          </ErrorMessages>
        )}
        <Spacer />
        <InputField>
          <Label htmlFor="name">
            이름 <span>*</span>
          </Label>
          <Input
            id="name"
            register={{ ...register('name', BASIC_INFO_VALIDATION.name) }}
            error={errors.name}
          />
        </InputField>
        <InputField>
          <Label htmlFor="phoneNumber">
            연락처 <span>*</span>
          </Label>
          <Row>
            <Input
              id="phoneNumber"
              register={{
                ...register('phoneNumber', BASIC_INFO_VALIDATION.phoneNumber),
              }}
              placeholder="- 없이 숫자만 입력"
              error={errors.phoneNumber}
            />
            <ThemeButton
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                handleGetCertifyNumber(e);
              }}
              variant="reversed"
              width="15rem"
              height="100%"
              fontSize={'smallmedium'}
              style={{ marginLeft: '3px', padding: '1rem 0' }}
            >
              {!isSmsSent ? '인증번호 발급' : '재전송'}
            </ThemeButton>
          </Row>
          {isSmsSent && remainSeconds > 0 && (
            <Row>
              <Input
                id="phoneNoConfirm"
                register={{
                  ...register('phoneNoConfirm', { required: true }),
                }}
                placeholder="인증번호 입력"
                error={errors.phoneNoConfirm}
                message={'문자를 받지 못했다면 재전송 버튼을 클릭해주세요.'}
              >
                <Timer totalSeconds={remainSeconds} />
              </Input>
            </Row>
          )}
        </InputField>
        <InputField>
          <Label htmlFor="email">
            이메일 <span>*</span>
          </Label>
          <Input
            id="email"
            register={{ ...register('email', BASIC_INFO_VALIDATION.email) }}
            error={errors.email}
          />
        </InputField>
        <InputField>
          <Label>
            생년월일 및 성별 <span>*</span>
          </Label>
          <Row>
            <BirthSexRow>
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
            </BirthSexRow>
            <PwSymbol>••••••</PwSymbol>
          </Row>
        </InputField>
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
  gap: 1.2rem;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.smallmedium};
  min-width: 25%;
  span {
    color: ${({ theme }) => theme.colors.theme};
  }
`;

const BirthSexRow = styled(Row)`
  width: 70%;
`;

const PwSymbol = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  letter-spacing: 0.5rem;
  margin-left: 1rem;
  width: 140%;
`;
