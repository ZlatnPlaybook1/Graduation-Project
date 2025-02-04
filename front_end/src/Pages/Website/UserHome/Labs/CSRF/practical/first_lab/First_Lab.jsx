import React, { useEffect, useState } from "react";
import axios from "axios";

const First_Lab = () => {
  const [accountNo, setAccountNo] = useState("");
  const [accountPass, setAccountPass] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [accountName, setAccountName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/account")
      .then((res) => {
        setAccountNo(res.data.accountNo);
        setAccountName(res.data.accountName);
        setAccountBalance(res.data.accountBalance);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!accountPass.trim()) {
      setMessage("Password cannot be empty");
      setStatus("warning");
      return;
    }

    try {
      const res = await axios.post(
        "http://127.0.0.1:8080/api/update-password",
        { accountPass }
      );
      setMessage(res.data.message);
      setStatus("success");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error updating password");
      setStatus("danger");
    }
  };

  return (
    <div className="container">
      <div className="row pt-5 mt-5 mb-3">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h1>My Bank Account</h1>
          <button className="btn btn-secondary btn-sm">Reset</button>
        </div>
        <div className="col-md-3"></div>
      </div>

      <div className="row pt-2">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="card border-primary mb-3">
            <div className="card-header text-primary">
              Account Name: <b>{accountName}</b> <br />
              Account No: <b>{accountNo}</b> <br />
              Balance: <b>{accountBalance}</b>
            </div>
          </div>

          <h3 className="mb-3">Update Your Password</h3>

          {message && (
            <div className={`alert alert-${status}`} role="alert">
              <b>{message}</b>
            </div>
          )}

          <form>
            <div className="mb-3">
              <label htmlFor="accountPass" className="form-label">
                Enter New Password:
              </label>
              <input
                type="password"
                className="form-control"
                value={accountPass}
                onChange={(e) => setAccountPass(e.target.value)}
                placeholder="Enter your new password"
              />
            </div>
            <div className="btn-group w-100 mb-5">
              <button className="btn btn-warning" onClick={handleUpdate}>
                Update Password
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default First_Lab;
