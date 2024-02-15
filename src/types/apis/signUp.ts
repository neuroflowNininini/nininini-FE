export type SignUpTermsAgreement = {
  agreeSms: boolean;
  agreeEmail: boolean;
};

export type SignUpBasicInfo = {
  userId: string;
  userPw: string;
  name: string;
  phoneNumber: string;
  email: string;
  birthSex: string;
};

export type SignUpInterestTags = {
  tags?: number[];
};

export type SignUpAiMeasure = {
  aiMeasure: string;
};

export type SignUp = SignUpBasicInfo & SignUpInterestTags & SignUpInterestTags & SignUpAiMeasure;
