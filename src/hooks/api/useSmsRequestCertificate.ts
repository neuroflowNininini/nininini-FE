import { useMutation } from '@tanstack/react-query';
import { NinininiAxios } from '~/config/axios';

interface PostSmsRequestCertificate {
  phoneNumber: string;
}

const postSmsRequestCertificate = async ({ phoneNumber }: PostSmsRequestCertificate) => {
  const { data } = await NinininiAxios.post(`/api/members/verifyPhone`, { phoneNumber });
  return data;
};

const useSmsRequestCertificate = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation({
    mutationFn: ({ phoneNumber }: PostSmsRequestCertificate) =>
      postSmsRequestCertificate({ phoneNumber }),
    onSuccess,
  });
};

export default useSmsRequestCertificate;
