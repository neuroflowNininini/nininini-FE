import styled from 'styled-components';
import theme from '../../shared/theme';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ADPage() {
  const location = useLocation();
  const { state } = location;
  const imgSrc = state.imgSrc;
  return (
    <Container>
      <TopWrap id="hometop">
        <div style={{ paddingTop: '20px', paddingBottom: '100px' }}>
          <img
            src={imgSrc}
            style={{ width: '100%' }}
          />
        </div>
      </TopWrap>
    </Container>
  );
}
const Container = styled.div`
  padding-bottom: 80px;
`;
const TopWrap = styled.div`
  position: relative;
  bottom: 49px;
  padding: 36px 0px 0px 0px;
`;
