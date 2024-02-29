import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { postOAuthLogin } from '~/api/login';
import { paths } from '~/config/paths';
import { CONSTANTS } from '~/constants';
import { OAuthPlatform } from '~/types/oAuth';
import { setCookie } from '~/utils/cookie';

export default function OAuthRedirectPage() {
  const navigate = useNavigate();
  const { platform } = useParams<{ platform: OAuthPlatform }>();
  const [params] = useSearchParams();
  const code = params.get('code');

  if (!platform || !code) return;

  const onSuccess = (userId?: string) => {
    if (userId) {
      /*NOTE -  새로운 사용자가 로그인한 경우 */
      setCookie(CONSTANTS.SNS_KEY, userId);
      navigate(paths.signUp('interestTags'));
    } else {
      /*NOTE - 기존 사용자가 로그인한 경우 */
      navigate(paths.home());
    }
    return;
  };

  useEffect(() => {
    postOAuthLogin({ platform, code, onSuccess });
  }, []);

  useEffect(() => {
    if (!code) {
      alert('소셜 서비스와 연결 중 문제가 일어났습니다.\n다시 시도해주세요.');
      navigate(paths.logIn());
      return;
    }
  }, []);

  return;
}
