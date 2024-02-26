import { useState } from 'react';
import { postSignUp } from '~/api/signUp';
import { BasicInfo } from '~/components/SignUpPage/BasicInfo';
import { InterestTags } from '~/components/SignUpPage/InterestTags';
import { NailRegister } from '~/components/SignUpPage/NailRegister';
import { SignUpComplete } from '~/components/SignUpPage/SignUpComplete';
import { TermsAgreement } from '~/components/SignUpPage/TermsAgreement';
import { paths } from '~/config/paths';
import { CONSTANTS } from '~/constants';
import { ReadAiMeasure } from '~/types/apis/aiMeasure';
import { LoginRes } from '~/types/apis/login';
import { SignUp } from '~/types/apis/signUp';
import { setCookie } from '~/utils/cookie';

type Step = 'agreement' | 'basicInfo' | 'interestTags' | 'nailRegister' | 'complete';

export default function SignUpPage() {
  const [step, setStep] = useState<Step>('agreement');
  const [signUpData, setSignUpData] = useState<SignUp>();
  return (
    <>
      {step === 'agreement' && (
        <TermsAgreement
          onNext={({ agreeSms, agreeEmail }) => {
            setSignUpData((prev: SignUp) => ({
              ...prev,
              agreeSms,
              agreeEmail,
            }));
            setStep('basicInfo');
          }}
        />
      )}
      {step === 'basicInfo' && (
        <BasicInfo
          onNext={(basicInfo) => {
            setSignUpData((prev: SignUp) => ({ ...prev, ...basicInfo }));
            setStep('interestTags');
          }}
        />
      )}
      {step === 'interestTags' && (
        <InterestTags
          onNext={(data) => {
            setStep('nailRegister');
            if (!data) return;
            setSignUpData((prev: SignUp) => ({ ...prev, tags: data.tags }));
          }}
        />
      )}
      {step === 'nailRegister' && (
        <NailRegister
          onNext={(aiMeasure: ReadAiMeasure) => {
            if (!signUpData) return;
            postSignUp({
              body: aiMeasure ? { ...signUpData, aiMeasure } : signUpData,
              onDuplicate: () => {
                alert('이미 가입한 회원입니다.');
              },
              onSuccess: (data: LoginRes) => {
                setCookie(CONSTANTS.ACCESS_TOKEN_KEY, data.accessToken);
                setCookie(CONSTANTS.REFRESH_TOKEN_KEY, data.refreshToken);
                window.location.href = paths.home();
              },
            });
          }}
        />
      )}
      {step === 'complete' && <SignUpComplete />}
    </>
  );
}
