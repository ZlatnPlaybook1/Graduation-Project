import React, { useEffect, useState } from "react";
import axios from "axios";
import GoBackBtn from "../../../../Components/GoBack_Btn/GoBack_Btn";
import ShowHintBtn from "../../../../Components/ShowHint_Btn/ShowHint_Btn";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AdminPage = ({ apiEndpoint, setErr, condition, tokenName }) => {
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [logged, setLogged] = useState(false);
  const cookie = Cookie();
  const token = jwtDecode(cookie.get(tokenName));
  const handleDeleteUser = () => {
    setLoadingDelete(true);
    axios
      .delete(`${apiEndpoint}/deleteuser`, { data: { username: "Ali" } })
      .then(() => setLoadingDelete(false))
      .catch(() => {
        setErr("Error deleting user Ali.");
        setLoadingDelete(false);
      });
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      setLogged(true);
    }
    console.log(logged);
    if (logged == false) {
      navigate("/jwtattacks/jwtattacks_lab/lab1");
    }
  }, [logged, token]);
  const spanCount = 400;
  // const conditionText = condition;
  return (
    <>
      <div
        style={{
          backgroundColor: "#000",
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <GoBackBtn />
        <ShowHintBtn />
        <main className="hacker-login">
          {Array.from({ length: spanCount }).map((_, index) => (
            <span key={index} className="hackerLogin-gridSpan"></span>
          ))}
          <div className="hackerLogin-signin">
            <div className="hacker-login-content text-center">
              {condition ? (
                <>
                  <h2 className="mb-5">Admin Dashboard</h2>
                  <button onClick={handleDeleteUser} disabled={loadingDelete}>
                    {loadingDelete ? "Deleting..." : "Delete User Ali"}
                  </button>
                </>
              ) : (
                <>
                  <h2 className="mb-5">Access Denied</h2>
                  <p>Only Admins Can Access This Page</p>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminPage;
