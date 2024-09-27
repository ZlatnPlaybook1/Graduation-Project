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
import Lab1 from "./Pages/Website/UserHome/Labs/Lab1/Lab1.jsx";
import Lab2 from "./Pages/Website/UserHome/Labs/Lab2/Lab2.jsx";
import RequireBack from "./Pages/Auth/RequireBack.jsx";
import Settings from "./Pages/Dashboard/Settings/Settings.jsx";
import Aboutus from "./Pages/Dashboard/AboutUs/Aboutus.jsx";
import SQLInjection from "./Pages/Website/UserHome/Labs/Lab1/SQLInjection.jsx";
import LoginSqlInjection from "./Pages/Website/UserHome/Labs/Lab1/LoginSqlInjection.jsx";
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
          {/* Start Lab1 Prepare */}
          <Route path="/lab1" element={<Lab1 />} />
          <Route path="/lab1/SqlInjectionLab" element={<SQLInjection />} />
          <Route
            path="/lab1/SqlInjectionLab/login"
            element={<LoginSqlInjection />}
          />
          {/* End Lab1 */}
          <Route path="/lab2" element={<Lab2 />} />
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
