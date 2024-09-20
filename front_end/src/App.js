import { Route, Routes, useLocation } from "react-router-dom";
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
// import RequireBack from "./Pages/Auth/RequireBack.jsx";

function App() {
  const location = useLocation();

  const showAnimation =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="App">
      {showAnimation && (
        <div className="wave-container">
          <div className="wave-wave"></div>
          <div className="wave-wave"></div>
          <div className="wave-wave"></div>
        </div>
      )}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        {/* <Route element={<RequireBack />}> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/authincate" element={<Authincate />} />
        {/* </Route> */}
        <Route path="/*" element={<Error404 />} />

        {/* Home - Labs - Routes */}
        <Route path="/home" element={<UserHome />} />
        <Route path="/lab1" element={<Lab1 />} />

        {/* Protected Routes */}
        {/* allowedRole={["writer", "admin"]} */}
        <Route element={<RequierAuth />}>
          <Route path="/dashboard" element={<Dashboard />}>
            {/* <Route element={<RequierAuth allowedRole={["admin"]} />}> */}
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<User />} />
            <Route path="user/add" element={<AddUser />} />
            <Route path="writer" element={<Writer />} />
          </Route>
          {/* <Route element={<RequierAuth allowedRole={["writer", "admin"]} />}> */}
        </Route>
        {/* </Route> */}
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
