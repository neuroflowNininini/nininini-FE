import { useMutation } from '@tanstack/react-query';
import { NinininiAxios } from '~/config/axios';

interface PostSmsCertificate {
  phoneNumber: string;
}

const postSmsCertificate = async ({ phoneNumber }: PostSmsCertificate) => {
  const { data } = await NinininiAxios.post(`/api/members/verifyPhone`, { phoneNumber });
  return data;
};

const useSmsCertificate = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation({
    mutationFn: ({ phoneNumber }: PostSmsCertificate) => postSmsCertificate({ phoneNumber }),
    onSuccess,
  });
};

export default useSmsCertificate;
