import React, { useEffect, useState } from "react";
import axios from "axios";
import GoBackBtn from "../../../../Components/GoBack_Btn/GoBack_Btn";
import ShowHintBtn from "../../../../Components/ShowHint_Btn/ShowHint_Btn";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";

const AdminPage = ({ apiEndpoint, tokenName, lab, hint, condition }) => {
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingCreateUser, setLoadingCreateUser] = useState(false);
  const [err, setErr] = useState("");
  const [logged, setLogged] = useState(false);
  const [token, setToken] = useState(null);
  const [decoded, setDecoded] = useState(null);
  const [message, setMessage] = useState(null);
  const cookie = Cookie();
  const navigate = useNavigate();
  const loginURL = `/jwtattacks/jwtattacks_lab/${lab}`;
  const sentToken = cookie.get(tokenName);
  // Fetch and decode token
  useEffect(() => {
    const storedToken = cookie.get(tokenName);
    if (storedToken) {
      try {
        const decodedToken = jwtDecode(storedToken);
        setDecoded(decodedToken);
        setToken(decodedToken);
        setLogged(true);
      } catch (error) {
        console.error("Invalid token:", error);
        cookie.remove(tokenName);
        navigate(loginURL); // Redirect if token is invalid
      }
    } else {
      navigate(loginURL); // Redirect if no token is found
    }
  }, [tokenName, navigate]);

  // Create user "Ali" if it doesn't exist and the logged user is an admin
  useEffect(() => {
    if (decoded?.username === "admin") {
      createUserAli();
    }
  }, [decoded]);

  const createUserAli = () => {
    setLoadingCreateUser(true);
    axios
      .post(
        `${apiEndpoint}/createuser`,
        {
          username: "Ali",
          password: "somepassword",
        }, // This is the request body
        {
          headers: {
            Authorization: `Bearer ${sentToken}`, // Attach JWT token
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        setLoadingCreateUser(false);
      })
      .catch(() => {
        setErr("Error creating user Ali.");
        setLoadingCreateUser(false);
      });
  };

  const handleDeleteUser = () => {
    setLoadingDelete(true);
    axios
      .delete(
        `${apiEndpoint}/deleteuser`, 
        {
          headers: {
            Authorization: `Bearer ${sentToken}`, // Attach JWT token
            "Content-Type": "application/json",
          },
          data: { username: "Ali" }, // Correct placement of request body
        }
      )
      .then(() => {
        setLoadingDelete(false);
        const successMessage =
          `<i class="fas fa-lightbulb show-hint-btn-icon"></i> User Ali has been deleted.`; // Fixed HTML class syntax
        Swal.fire({
          title: "Congratulations!",
          html: successMessage, // Use the updated message
          icon: "info",
          confirmButtonText: "Got it!",
        });
      })
      .catch(() => {
        setErr("Error deleting user Ali.");
        setLoadingDelete(false);
      });
  };
  

  const spanCount = 400;

  return (
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
                {message && (
                  <div dangerouslySetInnerHTML={{ __html: message }}></div>
                )}
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
  );
};

export default AdminPage;
