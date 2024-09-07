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
import Error403 from "./Pages/Auth/403.jsx";
import RequierAuth from "./Pages/Auth/RequierAuth.jsx";
function App() {
  const location = useLocation();

  const showAnimation =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="App">
      {showAnimation && (
        <div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      )}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/authincate" element={<Authincate />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<RequierAuth />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="403" element={<Error403 />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<User />} />
            <Route path="user/add" element={<AddUser />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
