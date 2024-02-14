export type SignUpTermsAgreement = {
  agree_sms: boolean;
  agree_email: boolean;
};

export type SignUpBasicInfo = {
  user_id: string;
  user_pw: string;
  name: string;
  phone_number: string;
  email: string;
  birth_sex: string;
};

export type SignUpInterestTags = {
  tags?: number[];
};

export type SignUpAiMeasure = {
  ai_measure: string;
};

export type SignUp = SignUpBasicInfo & SignUpInterestTags & SignUpInterestTags & SignUpAiMeasure;
