import { HandType } from './handType';

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
  aiMeasure?: Record<HandType, File>;
};

export type SignUp = SignUpBasicInfo & SignUpInterestTags & SignUpInterestTags & SignUpAiMeasure;
