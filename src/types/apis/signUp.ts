export type SignUpBasicInfo = {
  user_id: string;
  user_pw: string;
  name: string;
  phone_number: string;
  email: string;
  birth_sex: string;
};

export type SignUp = SignUpBasicInfo & {
  agree_sms: boolean;
  agree_email: boolean;
  tags: string[];
  ai_measure: string;
};
