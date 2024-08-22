import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Website/HomePage";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Users from "./Pages/Dashboard/Users.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
// import RequierAuth from "./Pages/Auth/RequierAuth.jsx";
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        {/* <Route element={<RequierAuth />}> */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
