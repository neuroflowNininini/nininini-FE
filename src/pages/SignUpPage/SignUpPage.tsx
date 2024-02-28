import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
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

export default function SignUpPage() {
  const [searchParams] = useSearchParams();
  const step = searchParams.get('step');
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState<SignUp>();
  return (
    <>
      {step === null && (
        <TermsAgreement
          onNext={({ agreeSms, agreeEmail }) => {
            setSignUpData((prev: SignUp) => ({
              ...prev,
              agreeSms,
              agreeEmail,
            }));
            navigate(paths.signUp('basicInfo'));
          }}
        />
      )}
      {step === 'basicInfo' && (
        <BasicInfo
          onNext={(basicInfo) => {
            setSignUpData((prev: SignUp) => ({ ...prev, ...basicInfo }));
            navigate(paths.signUp('interestTags'));
          }}
        />
      )}
      {step === 'interestTags' && (
        <InterestTags
          onNext={(data) => {
            navigate(paths.signUp('nailRegister'));
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
              onSuccess: (data: LoginRes) => {
                setCookie(CONSTANTS.ACCESS_TOKEN_KEY, data.accessToken);
                setCookie(CONSTANTS.REFRESH_TOKEN_KEY, data.refreshToken);
                navigate(paths.signUp('complete'));
              },
            });
          }}
        />
      )}
      {step === 'complete' && <SignUpComplete />}
    </>
  );
}
