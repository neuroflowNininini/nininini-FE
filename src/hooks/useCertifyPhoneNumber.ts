import { useState } from 'react';

export const useCertifyPhoneNumber = () => {
  const [isSmsSent, setIsSmsSent] = useState(false);

  const handleGetCertifyNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    /*TODO - 연락처 전송 api 연결, 200 시 아래 로직 수행 */
    alert(
      '인증 번호가 휴대폰 문자로 전송되었습니다.\n문자를 받지 못했다면 재전송 버튼을 클릭해주세요.',
    );
    setIsSmsSent(true);
  };

  return { isSmsSent, handleGetCertifyNumber };
};
