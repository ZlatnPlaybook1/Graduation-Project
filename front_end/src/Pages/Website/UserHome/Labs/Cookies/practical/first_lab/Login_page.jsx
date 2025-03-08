import CookiesLogin from "../Login";
export default function Login_page() {
  return (
    <CookiesLogin
      CookieName="role"
      ApiEnd="cookie_login"
      labName="first"
      values={["admin", "support"]}
    />
  );
}
