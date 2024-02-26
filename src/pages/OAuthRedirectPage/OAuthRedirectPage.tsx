import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { paths } from '~/config/paths';
import { OAuthPlatform } from '~/types/oAuth';

export default function OAuthRedirectPage() {
  const navigate = useNavigate();
  const { platform } = useParams<{ platform: OAuthPlatform }>();
  const [params] = useSearchParams();
  const code = params.get('code');

  // const setCacheKey = useCacheKeyStore((state) => state.setCacheKey);

  const signInCallback = () => {
    /*NOTE -  새로운 사용자가 로그인한 경우 */
    /*NOTE - 기존 사용자가 로그인한 경우 */
    navigate(paths.home());
    return;
  };

  useEffect(() => {
    if (!code) {
      alert('소셜 서비스와 연결 중 문제가 일어났습니다.\n다시 시도해주세요.');
      navigate(paths.logIn());
      return;
    }
  }, []);

  return;
}
