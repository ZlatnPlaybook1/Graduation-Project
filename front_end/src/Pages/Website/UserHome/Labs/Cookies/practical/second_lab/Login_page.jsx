import CookiesLogin from "../Login";
export default function Login_page() {
  return (
    <CookiesLogin
      CookieName="userId"
      ApiEnd="cookie_login_second"
      labName="second"
      values={["MQ==", "OQ=="]}
    />
  );
}
