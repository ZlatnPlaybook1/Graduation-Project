import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Website/HomePage";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Users from "./Pages/Dashboard/Users.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import User from "./Pages/Dashboard/User.jsx";
import Authincate from "./Pages/Auth/Authincate.jsx";
import AddUser from "./Pages/Dashboard/AddUser.jsx";
import RequierAuth from "./Pages/Auth/RequierAuth.jsx";
import Writer from "./Pages/Dashboard/Writer.jsx";
import Error404 from "./Pages/Auth/404.jsx";
import UserHome from "./Pages/Website/UserHome/UserHome.jsx";
import SQL_INJECTION from "./Pages/Website/UserHome/Labs/Sql_Injection/Sql_Injection.jsx";
import XSS from "./Pages/Website/UserHome/Labs/XSS/XSS.jsx";
import XSS_LAB from "./Pages/Website/UserHome/Labs/XSS/XSS_lab.jsx";
import FIRST_LAB from "./Pages/Website/UserHome/Labs/XSS/Practical/First_lab.jsx";
import Cookies from "./Pages/Website/UserHome/Labs/Cookies/Cookies.jsx";
import COOKIES_LAB from "./Pages/Website/UserHome/Labs/Cookies/Cookies_lab.jsx";
import CookiesLogin from "./Pages/Website/UserHome/Labs/Cookies/Login_page.jsx";
import CookiesAdmin from "./Pages/Website/UserHome/Labs/Cookies/Admin.jsx";
import CookiesSupport from "./Pages/Website/UserHome/Labs/Cookies/Support.jsx";
import RequireBack from "./Pages/Auth/RequireBack.jsx";
import Settings from "./Pages/Dashboard/Settings/Settings.jsx";
import Aboutus from "./Pages/Dashboard/AboutUs/Aboutus.jsx";
import SQLInjection from "./Pages/Website/UserHome/Labs/Sql_Injection/SQLInjection_lab.jsx";
import LoginSqlInjection from "./Pages/Website/UserHome/Labs/Sql_Injection/LoginSqlInjection.jsx";
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
        {/* <Route element={<RequierAuth allowedRole={["writer", "admin"]} />}> */}
          <Route path="/home" element={<UserHome />} />
          {/* Start Sql_Injection Prepare */}
          <Route path="/sql_Injection" element={<SQL_INJECTION />} />
          <Route path="/sql_Injection/sql_Injection_lab" element={<SQLInjection />} />
          {/* <Route
            path="/Sql_Injection/SqlInjectionLab/login"
            element={<LoginSqlInjection />}
          /> */}
          {/* End Sql_Injection */}
          <Route path="/xss" element={<XSS />} />
          <Route path="/xss/xss_lab" element={<XSS_LAB />} />
          <Route path="/xss/xss_lab/first_lab" element={<FIRST_LAB />} />
          {/* End XSS */}
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/cookies/cookies_lab" element={<COOKIES_LAB />} />
          <Route path="/cookies/cookies_lab/login" element={<CookiesLogin />} />
          <Route path="/cookies/cookies_lab/admin" element={<CookiesAdmin />} />
          <Route path="/cookies/cookies_lab/support" element={<CookiesSupport />} />
          {/* Cookies */}
        {/* </Route> */}
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
              <Route path="writer" element={<Writer />} />
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
