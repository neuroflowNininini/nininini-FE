import { useState } from 'react';
import useSmsCertificate from './api/useSmsCertificate';
import useSmsRequestCertificate from './api/useSmsRequestCertificate';

export const useCertifyPhoneNumber = (
  phoneNumber: string,
  startTimer: () => void,
  onInvalid: () => void,
) => {
  const [isSmsSent, setIsSmsSent] = useState(false);
  const [isCertified, setIsCertified] = useState(false);
  const { mutate: smsRequestCertificate } = useSmsRequestCertificate({
    onSuccess: () => {
      startTimer();
      alert(
        '인증 번호가 휴대폰 문자로 전송되었습니다.\n문자를 받지 못했다면 재전송 버튼을 클릭해주세요.',
      );
      setIsSmsSent(true);
    },
  });
  const { mutate: smsCertificate } = useSmsCertificate({
    onSuccess: () => {
      setIsCertified(true);
    },
    onInvalid,
  });

  const handleGetCertifyNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    smsRequestCertificate({ phoneNumber });
  };

  const handleCertifyNumber = (
    e: React.MouseEvent<HTMLButtonElement>,
    verificationCode: string,
  ) => {
    e.preventDefault();
    smsCertificate({ phoneNumber, verificationCode });
  };

  return { isSmsSent, isCertified, handleGetCertifyNumber, handleCertifyNumber };
};
