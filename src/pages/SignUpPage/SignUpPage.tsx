import { useState } from 'react';
import { postSignUp } from '~/api/signUp';
import { BasicInfo } from '~/components/SignUpPage/BasicInfo';
import { InterestTags } from '~/components/SignUpPage/InterestTags';
import { NailRegister } from '~/components/SignUpPage/NailRegister';
import { SignUpComplete } from '~/components/SignUpPage/SignUpComplete';
import { TermsAgreement } from '~/components/SignUpPage/TermsAgreement';
import { ReadAiMeasure } from '~/types/apis/aiMeasure';
import { SignUp } from '~/types/apis/signUp';
import { HandType } from '~/types/handType';

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
            postSignUp(aiMeasure ? { ...signUpData, aiMeasure } : signUpData).then(
              ({ accessToken, refreshToken }) => {
                if (accessToken && refreshToken) {
                  setStep('complete');
                  /*TODO - response로 받은 토큰 관리 */
                }
              },
            );
          }}
        />
      )}
      {step === 'complete' && <SignUpComplete />}
    </>
  );
}
