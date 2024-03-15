import { useState } from 'react';
import useSmsCertificate from './api/useSmsCertificate';

export const useCertifyPhoneNumber = (phoneNumber: string, startTimer: () => void) => {
  const [isSmsSent, setIsSmsSent] = useState(false);
  const { mutate: smsCertificate } = useSmsCertificate({
    onSuccess: () => {
      startTimer();
      alert(
        '인증 번호가 휴대폰 문자로 전송되었습니다.\n문자를 받지 못했다면 재전송 버튼을 클릭해주세요.',
      );
      setIsSmsSent(true);
    },
  });

  const handleGetCertifyNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    smsCertificate({ phoneNumber });
  };

  return { isSmsSent, handleGetCertifyNumber };
};
