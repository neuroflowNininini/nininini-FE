import styled from 'styled-components';
import Divider from '~/components/common/Divider';
import { Heading } from '~/components/common/Heading';
import { TERMS_DETAIL } from '~/constants/terms_detail';

interface TermsDetailProps {
  termsType: keyof typeof TERMS_DETAIL;
}

export default function TermsDetailPage({ termsType }: TermsDetailProps) {
  return (
    <Container>
      <Heading>{TERMS_DETAIL[termsType]['title']}</Heading>
      <Divider />
      <TextBox>{TERMS_DETAIL[termsType]['text']}</TextBox>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 5rem;
`;

const TextBox = styled.div`
  font-size: 1.6rem;
  margin-top: 5rem;
  padding: 2rem;
  overflow: auto;
  border: 1px solid ${({ theme }) => theme.colors.gray['200']};
  white-space: pre-wrap;
`;
