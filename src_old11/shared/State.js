// 원래 회원 정보는 dummy 에 저장해둘것.
// 회원 가입하면 추가하고, 로그인 시 반영.


// 로그인 여부
export const CheckLogin = () => {
  if (sessionStorage.getItem("isLogin") == null) {
    return "false";
  }
  else {
    return sessionStorage.getItem("isLogin")
  }
}
//  로그인
export const GoLogIn = () => {
  sessionStorage.setItem("isLogin", "true")
}
// 로그아웃
export const GoLogOut = () => {
  sessionStorage.setItem("isLogin", "false")
}
