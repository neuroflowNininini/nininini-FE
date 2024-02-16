import { RegisterOptions } from 'react-hook-form';
import { BasicInfoForm } from './BasicInfo';

export const BASIC_INFO_VALIDATION: Partial<Record<keyof BasicInfoForm, RegisterOptions>> = {
  userId: {
    required: '아이디 중복확인을 해주세요.',
    minLength: {
      value: 3,
      message: '3자 ~ 10자의 영문, 특수문자, 숫자 조합으로 입력해주세요.',
    },
    maxLength: {
      value: 10,
      message: '3자 ~ 10자의 영문, 특수문자, 숫자 조합으로 입력해주세요.',
    },
    pattern: {
      value: /^[a-zA-Z0-9-_]{3,10}$/,
      message: '3자 ~ 10자의 영문, 특수문자, 숫자 조합으로 입력해주세요.',
    },
  },
  userPw: {
    required: '비밀번호를 입력해주세요.',
    minLength: {
      value: 5,
      message: '5자 ~ 20자로 입력해주세요.',
    },
    maxLength: {
      value: 20,
      message: '5자 ~ 20자로 입력해주세요.',
    },
  },
  name: {
    required: '이름을 입력해주세요.',
    minLength: {
      value: 2,
      message: '2자 ~ 15자로 입력해주세요.',
    },
    maxLength: {
      value: 15,
      message: '2자 ~ 15자로 입력해주세요.',
    },
    pattern: {
      value: /^[a-zA-Z]+|[가-힣]+$/,
      message: '영문 혹은 한글로만 입력이 가능합니다.',
    },
  },
  email: {
    required: '이메일을 입력해주세요.',
    maxLength: {
      value: 30,
      message: '30자 이하로 입력이 가능합니다.',
    },
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: '유효한 이메일 형식이 아닙니다.',
    },
  },
  birth: {
    required: '6자의 생년월일을 입력해주세요. (ex. 991109)',
    minLength: {
      value: 6,
      message: '6자의 생년월일을 입력해주세요. (ex. 991109)',
    },
    maxLength: {
      value: 6,
      message: '6자의 생년월일을 입력해주세요. (ex. 991109)',
    },
    pattern: {
      value: /^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/,
      message: '유효한 생년월일이 아닙니다.',
    },
  },
  sex: {
    required: '주민등록번호 뒷번호 첫 자를 입력해주세요.',
    minLength: 1,
    maxLength: 1,
    pattern: {
      value: /[1-4]/,
      message: '유효한 번호가 아닙니다.',
    },
  },
};
