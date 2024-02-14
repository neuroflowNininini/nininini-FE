import { useState } from 'react';
import { BasicInfo } from '~/components/SignUpPage/BasicInfo';
import { TermsAgreement } from '~/components/SignUpPage/TermsAgreement';
import { SignUp } from '~/types/apis/signUp';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
type Step = 'agreement' | 'basicInfo' | 'interestTags' | 'aiRegister';
export default function SignUpPage() {
  const [step, setStep] = useState<Step>('agreement');
  const [signUpData, setSignUpData] = useState<SignUp>();
  console.log(signUpData);
  return (
    <>
      {step === 'agreement' && (
        <TermsAgreement
          onNext={([smsChecked, EmailChecked]) => {
            setSignUpData((prev: SignUp) => ({
              ...prev,
              agree_sms: smsChecked,
              agree_email: EmailChecked,
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
    </>
  );
}
