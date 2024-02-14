import { useState } from 'react';
import { BasicInfo } from '~/components/SignUpPage/BasicInfo';
import { InterestTags } from '~/components/SignUpPage/InterestTags';
import { TermsAgreement } from '~/components/SignUpPage/TermsAgreement';
import { SignUp } from '~/types/apis/signUp';

type Step = 'agreement' | 'basicInfo' | 'interestTags' | 'aiRegister';

export default function SignUpPage() {
  const [step, setStep] = useState<Step>('agreement');
  const [signUpData, setSignUpData] = useState<SignUp>();
  return (
    <>
      {step === 'agreement' && (
        <TermsAgreement
          onNext={({ agree_sms, agree_email }) => {
            setSignUpData((prev: SignUp) => ({
              ...prev,
              agree_sms,
              agree_email,
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
          onNext={({ tags }) => {
            setSignUpData((prev: SignUp) => ({ ...prev, tags }));
          }}
        />
      )}
    </>
  );
}
