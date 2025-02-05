import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Third_Lab() {
  const apiUrl = "http://127.0.0.1:8080/api";
  const [users, setUsers] = useState([]);
  const [transferAmount, setTransferAmount] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientId, setRecipientId] = useState("");
  const [userId, setUserId] = useState("");
  const [account, setAccount] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`${apiUrl}/CSRF-accounts`)
      .then((response) => setUsers(response.data.money))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  useEffect(() => {
    if (userId) {
      axios
        .get(`${apiUrl}/CSRF-account/${userId}`)
        .then((response) => setAccount(response.data.account))
        .catch((error) => console.error("Error fetching account:", error));
    }
  }, [userId]);

  const handleTransfer = (e) => {
    e.preventDefault();

    axios
      .post(`${apiUrl}/CSRF-transfer`, {
        transferAmount,
        recipientId,
        userId,
      })
      .then((response) => {
        setMessage(response.data.message);
        setTransferAmount("");
        setRecipientName("");

        axios.get(`${apiUrl}/CSRF-accounts`).then((response) => {
          setUsers(response.data.money);
        });
        axios.get(`${apiUrl}/CSRF-account/${userId}`).then((response) => {
          setAccount(response.data.account);
        });
      })
      .catch((error) => {
        setMessage(error.response?.data?.message || "Transfer failed");
        console.error("Transfer error:", error);
      });
  };

  return (
    <div className="container mt-4">
      <div className="header text-center mb-4">
        <h1 className="display-4">Money Transfer</h1>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Account Information</h5>
          <p className="card-text">
            Account Name: <b>{account.name}</b>
          </p>
          <p className="card-text">
            Balance: <b>{account.balance} $</b>
          </p>
        </div>
      </div>

      {message && (
        <div
          className={`alert ${
            message.includes("success") ? "alert-success" : "alert-danger"
          }`}
          role="alert"
        >
          {message}
        </div>
      )}

      <form onSubmit={handleTransfer} className="form-group">
        <div className="form-group">
          <label htmlFor="recipient_name">Recipient Name:</label>
          <input
            type="text"
            className="form-control"
            id="recipient_name"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="transfer_amount">Transfer Amount:</label>
          <input
            type="number"
            className="form-control"
            id="transfer_amount"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Transfer
        </button>
      </form>

      <div className="table-responsive mt-4">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.balance} $</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
