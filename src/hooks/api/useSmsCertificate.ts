import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { NinininiAxios } from '~/config/axios';
import { NinininiErrorResponse } from '~/types/apiResponse';

interface PostSmsCertificate {
  phoneNumber: string;
  verificationCode: string;
}

const postSmsCertificate = async ({ phoneNumber, verificationCode }: PostSmsCertificate) => {
  const { data } = await NinininiAxios.post(`/api/members/verifyNumber`, {
    phoneNumber,
    verificationCode,
  });
  return data;
};

const useSmsCertificate = ({
  onSuccess,
  onInvalid,
}: {
  onSuccess: () => void;
  onInvalid: () => void;
}) => {
  return useMutation({
    mutationFn: ({ phoneNumber, verificationCode }: PostSmsCertificate) =>
      postSmsCertificate({ phoneNumber, verificationCode }),
    onSuccess,
    onError: (error: AxiosError<NinininiErrorResponse>) => {
      switch (error.response?.status) {
        case 404:
          if (error.response.data.exception.errorCode === 'NOT_FOUND') {
            onInvalid();
          }
          break;
      }
    },
  });
};

export default useSmsCertificate;
