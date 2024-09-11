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
        <Route path="/register" element={<Register />} />
        <Route path="/authincate" element={<Authincate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error404 />} />

        {/* Protected Routes */}
        <Route element={<RequierAuth allowedRole={["2005", "1900"]} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route element={<RequierAuth allowedRole={["1900"]} />}>
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<User />} />
              <Route path="user/add" element={<AddUser />} />
            </Route>
            <Route element={<RequierAuth allowedRole={["2005", "1900"]} />}>
              <Route path="writer" element={<Writer />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
