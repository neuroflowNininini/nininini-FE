import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CheckBoxInput from '~/components/common/CheckBoxInput/CheckBoxInput';
import { ChevronToggle } from '~/components/common/ChevronToggle';
import { ThemeButton } from '~/components/common/ThemeButton';
import { TERMS_DETAIL } from '~/constants/terms_detail';
import { SignUpTermsAgreement } from '~/types/apis/signUp';
import { SignUpHeader } from '../SignUpHeader';

interface TermsAgreementProps {
  onNext: (args: SignUpTermsAgreement) => void;
}

export default function TermsAgreement({ onNext }: TermsAgreementProps) {
  const [mandatoryAllChecked, setMandatoryAllChecked] = useState(false);
  const [mandatoryUsageChecked, setMandatoryUsageChecked] = useState(false);
  const [mandatoryPersonalChecked, setMandatoryPersonalChecked] = useState(false);
  const [marketingAllChecked, setMarketingAllChecked] = useState(false);
  const [marketingSMSChecked, setMarketingSMSChecked] = useState(false);
  const [marketingEmailChecked, setMarketingEmailChecked] = useState(false);

  useEffect(() => {
    setMandatoryAllChecked(mandatoryUsageChecked && mandatoryPersonalChecked);
    setMarketingAllChecked(marketingSMSChecked && marketingEmailChecked);
  }, [mandatoryUsageChecked, mandatoryPersonalChecked, marketingSMSChecked, marketingEmailChecked]);

  return (
    <Container>
      <SignUpHeader
        totalSteps={4}
        step={1}
      />
      <Title>약관동의</Title>
      <FormItem>
        <HeaderCheckBoxContainer>
          <CheckBoxInput
            onChange={(e) => {
              setMandatoryAllChecked(e.target.checked);
              setMandatoryUsageChecked(e.target.checked);
              setMandatoryPersonalChecked(e.target.checked);
            }}
            id="mandatory"
            text="전체 선택"
            isChecked={mandatoryAllChecked}
          />
        </HeaderCheckBoxContainer>
        <BorderBox>
          {/*TODO - 약관 내용 토글의 children으로 작성하기 */}
          <ChevronToggle
            label={
              <CheckBoxInput
                onChange={(e) => {
                  setMandatoryUsageChecked(e.target.checked);
                }}
                id="mandatory-usage"
                text="[필수] 이용약관 동의"
                isChecked={mandatoryUsageChecked}
              />
            }
            fontSize={'large'}
          >
            <TermsTextBox>{TERMS_DETAIL['usage']['text']}</TermsTextBox>
          </ChevronToggle>
        </BorderBox>
        <BorderBox>
          {/*TODO - 약관 내용 토글의 children으로 작성하기 */}
          <ChevronToggle
            label={
              <CheckBoxInput
                onChange={(e) => {
                  setMandatoryPersonalChecked(e.target.checked);
                }}
                id="mandatory-personal"
                text="[필수] 개인정보 수집 및 이용 동의"
                isChecked={mandatoryPersonalChecked}
              />
            }
            fontSize={'large'}
          >
            <TermsTextBox>{TERMS_DETAIL['privacy']['text']}</TermsTextBox>
          </ChevronToggle>
        </BorderBox>
      </FormItem>
      <FormItem>
        <HeaderCheckBoxContainer>
          <CheckBoxInput
            onChange={(e) => {
              setMarketingAllChecked(e.target.checked);
              setMarketingSMSChecked(e.target.checked);
              setMarketingEmailChecked(e.target.checked);
            }}
            id="marketing"
            text="마케팅 수신동의"
            isChecked={marketingAllChecked}
          />
        </HeaderCheckBoxContainer>
        <BorderBox>
          <div className="col-item">
            <CheckBoxInput
              onChange={(e) => {
                setMarketingSMSChecked(e.target.checked);
              }}
              id="marketing-sms"
              text="SMS"
              fontSize={'smallmedium'}
              isChecked={marketingSMSChecked}
            />
          </div>
          <div className="col-item">
            <CheckBoxInput
              onChange={(e) => {
                setMarketingEmailChecked(e.target.checked);
              }}
              id="marketing-email"
              text="E-mail 이메일"
              fontSize={'smallmedium'}
              isChecked={marketingEmailChecked}
            />
          </div>
        </BorderBox>
      </FormItem>
      <ThemeButton
        onClick={() => {
          if (!mandatoryAllChecked) {
            alert('필수 약관에 동의가 필요합니다.');
            return;
          }
          onNext({
            agreeSms: marketingSMSChecked,
            agreeEmail: marketingEmailChecked,
          });
        }}
      >
        다음
      </ThemeButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 700;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HeaderCheckBoxContainer = styled.div`
  margin-bottom: 1rem;
`;

const BorderBox = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray['100']};
  padding: 1.2rem;
  display: flex;
  .col-item {
    width: 50%;
  }
`;

const TermsTextBox = styled.div`
  height: 20rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  white-space: pre-wrap;
  overflow-y: auto;
`;
