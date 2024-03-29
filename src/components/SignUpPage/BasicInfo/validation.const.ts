import { RegisterOptions } from 'react-hook-form';
import { BasicInfoForm } from './BasicInfo';

export const BASIC_INFO_VALIDATION: Partial<Record<keyof BasicInfoForm, RegisterOptions>> = {
  userId: {
    required: '* 아이디를 입력해주세요.',
    pattern: {
      value: /^[a-zA-Z0-9-_]{3,10}$/,
      message: '* 아이디: 3자 ~ 10자의 영문, 특수문자, 숫자 중 한 가지 이상의 조합',
    },
  },
  userPw: {
    required: '* 비밀번호를 입력해주세요.',
    pattern: {
      value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{5,20}$/,
      message: '* 비밀번호:  5자 ~ 20자의 영문, 특수문자, 숫자 각각 필수',
    },
  },
  name: {
    required: '* 이름을 입력해주세요.',
    minLength: {
      value: 2,
      message: '* 이름: 2자 ~ 15자',
    },
    maxLength: {
      value: 15,
      message: '* 이름: 2자 ~ 15자',
    },
    pattern: {
      value: /^[a-zA-Z]+|[가-힣]+$/,
      message: '* 이름: 영문 혹은 한글',
    },
  },
  phoneNumber: {
    required: '* 연락처: 연락처 인증이 필요합니다.',
    pattern: {
      value: /^010\d{8}$/,
      message: '* 연락처: 010으로 시작하는 11자리 번호',
    },
  },
  email: {
    required: '* 이메일을 입력해주세요.',
    maxLength: {
      value: 30,
      message: '* 이메일: 30자 이하',
    },
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: '* 이메일: 유효한 이메일 형식이 아닙니다.',
    },
  },
  birth: {
    required: '* 생년월일: 6자의 생년월일을 입력해주세요. (ex. 991109)',
    minLength: {
      value: 6,
      message: '* 생년월일: 6자의 생년월일 (ex. 991109)',
    },
    maxLength: {
      value: 6,
      message: '* 생년월일: 6자의 생년월일 (ex. 991109)',
    },
    pattern: {
      value: /^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/,
      message: '* 생년월일: 유효한 생년월일이 아닙니다.',
    },
  },
  sex: {
    required: '* 성별: 주민등록번호 뒷번호 첫 자를 입력해주세요.',
    minLength: 1,
    maxLength: 1,
    pattern: {
      value: /[1-4]/,
      message: '* 성별: 유효한 번호가 아닙니다.',
    },
  },
};
