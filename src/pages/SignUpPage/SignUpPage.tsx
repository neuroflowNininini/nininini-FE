import { useState } from 'react';
import { BasicInfo } from '~/components/SignUpPage/BasicInfo';
import { InterestTags } from '~/components/SignUpPage/InterestTags';
import { NailRegister } from '~/components/SignUpPage/NailRegister';
import { TermsAgreement } from '~/components/SignUpPage/TermsAgreement';
import { SignUp } from '~/types/apis/signUp';

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
          onNext={(aiMeasure: string) => {
            setStep('complete');
            if (!aiMeasure) return;
            // setSignUpData((prev: SignUp) => ({ ...prev, aiMeasure }));
            /*TODO - 회원가입 최종 api 쏘기 */
          }}
        />
      )}
    </>
  );
}
