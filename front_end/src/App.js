import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Website/HomePage";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Authincate from "./Pages/Auth/Authincate.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Users from "./Pages/Dashboard/Users/Users.jsx";
import User from "./Pages/Dashboard/User/User.jsx";
import AddUser from "./Pages/Dashboard/AddUser/AddUser.jsx";
import RequierAuth from "./Pages/Auth/RequierAuth.jsx";
import Writer from "./Pages/Dashboard/Writer/Writer.jsx";
import Error404 from "./Pages/Auth/404.jsx";
import UserHome from "./Pages/Website/UserHome/UserHome.jsx";
import SQL_INJECTION from "./Pages/Website/UserHome/Labs/Sql_Injection/Sql_Injection.jsx";
import LoginSqlInjection from "./Pages/Website/UserHome/Labs/Sql_Injection/practical/first_lab/LoginSqlInjection.jsx";
import Welcome from "./Pages/Website/UserHome/Labs/Sql_Injection/practical/first_lab/Welcome.jsx";
import XSS from "./Pages/Website/UserHome/Labs/XSS/XSS.jsx";
import XSS_LAB from "./Pages/Website/UserHome/Labs/XSS/XSS_lab.jsx";
import XSS_FIRST from "./Pages/Website/UserHome/Labs/XSS/Practical/First_lab.jsx";
import XSS_SECOND from "./Pages/Website/UserHome/Labs/XSS/Practical/Second_lab.jsx";
import XSS_THIRD from "./Pages/Website/UserHome/Labs/XSS/Practical/Third_lab.jsx";
import XSS_FOURTH from "./Pages/Website/UserHome/Labs/XSS/Practical/Fourth_lab.jsx";
import Cookies from "./Pages/Website/UserHome/Labs/Cookies/Cookies.jsx";
import COOKIES_LAB from "./Pages/Website/UserHome/Labs/Cookies/Cookies_lab.jsx";
import CookiesFirstLogin from "./Pages/Website/UserHome/Labs/Cookies/practical/first_lab/Login_page.jsx";
import CookiesFirstAdmin from "./Pages/Website/UserHome/Labs/Cookies/practical/first_lab/Admin.jsx";
import CookiesFirstSupport from "./Pages/Website/UserHome/Labs/Cookies/practical/first_lab/Support.jsx";
import CookiesSecondlogin from "./Pages/Website/UserHome/Labs/Cookies/practical/second_lab/Login_page.jsx";
import CookiesSecondAdmin from "./Pages/Website/UserHome/Labs/Cookies/practical/second_lab/Admin.jsx";
import CookiesSecondSupport from "./Pages/Website/UserHome/Labs/Cookies/practical/second_lab/Support.jsx";
import RequireBack from "./Pages/Auth/RequireBack.jsx";
import Settings from "./Pages/Dashboard/Settings/Settings.jsx";
import Aboutus from "./Pages/Dashboard/AboutUs/Aboutus.jsx";
import SQLInjection from "./Pages/Website/UserHome/Labs/Sql_Injection/SQLInjection_lab.jsx";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        {/* <Route element={<RequireBack />}> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/authenticate" element={<Authincate />} />
        {/* </Route> */}
        <Route path="/*" element={<Error404 />} />

        {/* Home - Labs - Routes */}
        <Route element={<RequierAuth allowedRole={["writer", "admin"]} />}>
          <Route path="/home" element={<UserHome />} />
          {/* Start Sql_Injection Prepare */}
          <Route path="/sql_Injection" element={<SQL_INJECTION />} />
          <Route
            path="/sql_Injection/sql_Injection_lab"
            element={<SQLInjection />}
          />
          <Route
            path="/Sql_Injection/sql_Injection_lab/login"
            element={<LoginSqlInjection />}
          />
          <Route
            path="/Sql_Injection/sql_Injection_lab/Welcome"
            element={<Welcome />}
          />
          {/* End Sql_Injection */}
          <Route path="/xss" element={<XSS />} />
          <Route path="/xss/xss_lab" element={<XSS_LAB />} />
          <Route path="/xss/xss_lab/first_lab" element={<XSS_FIRST />} />
          <Route path="/xss/xss_lab/second_lab" element={<XSS_SECOND />} />
          <Route path="/xss/xss_lab/third_lab" element={<XSS_THIRD />} />
          <Route path="/xss/xss_lab/fourth_lab" element={<XSS_FOURTH />} />
          {/* End XSS */}
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/cookies/cookies_lab" element={<COOKIES_LAB />} />
          <Route
            path="/cookies/cookies_lab/first/login"
            element={<CookiesFirstLogin />}
          />
          <Route
            path="/cookies/cookies_lab/first/admin"
            element={<CookiesFirstAdmin />}
          />
          <Route
            path="/cookies/cookies_lab/first/support"
            element={<CookiesFirstSupport />}
          />
          <Route
            path="/cookies/cookies_lab/second/login"
            element={<CookiesSecondlogin />}
          />
          <Route
            path="/cookies/cookies_lab/second/admin"
            element={<CookiesSecondAdmin />}
          />
          <Route
            path="/cookies/cookies_lab/second/support"
            element={<CookiesSecondSupport />}
          />
          {/* Cookies */}
        </Route>
        {/* End Routes of Labs */}

        {/* Start Protected Routes */}
        <Route element={<RequierAuth allowedRole={["writer", "admin"]} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route element={<RequierAuth allowedRole={["admin"]} />}>
              <Route path="users" element={<Users />} />
              <Route path="user/edit/:id" element={<User />} />
              <Route path="user/add" element={<AddUser />} />
            </Route>
            <Route element={<RequierAuth allowedRole={["writer", "admin"]} />}>
              <Route path="personal-information" element={<Writer />} />
              <Route path="settings" element={<Settings />} />
              <Route path="about" element={<Aboutus />} />
            </Route>
          </Route>
        </Route>
        {/* End Protected Routes */}
      </Routes>
    </div>
  );
}

export default App;
