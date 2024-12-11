import React, { useState, useEffect } from "react";
import axios from "axios";
import "./IDOR_Lab3.css";
import GoBack from "../../../GoBack_Btn/GoBack_Btn";
import ShowHint from "../../../ShowHint_Btn/ShowHint_Btn";

export default function IDORLabComponent() {
  const [account, setAccount] = useState({ name: "", balance: 0 });
  const [users, setUsers] = useState([]);
  const [transferAmount, setTransferAmount] = useState("");
  const [recipientId, setRecipientId] = useState("");
  const [message, setMessage] = useState("");
  const userId = 1;
  const apiUrl = "http://127.0.0.1:8080/api"; // Base API URL

  useEffect(() => {
    // PATCH request to update accounts
    axios
      .patch(`${apiUrl}/accounts`, { updated: true }) // Replace `{ updated: true }` with the appropriate data for your API
      .then(() => console.log("PATCH request successful"))
      .catch((error) =>
        console.error("Failed to execute PATCH request:", error)
      );

    // Fetch account information for the current user
    axios
      .get(`${apiUrl}/account/${userId}`)
      .then((response) => setAccount(response.data.account))
      .catch((error) => console.error("Failed to fetch account:", error));

    // Fetch all accounts
    axios
      .get(`${apiUrl}/accounts`)
      .then((response) => setUsers(response.data.money))
      .catch((error) => console.error("Failed to fetch accounts:", error));
  }, [userId]);

  const handleTransfer = (e) => {
    e.preventDefault();

    axios
      .post(
        `${apiUrl}/transfer`,
        {
          transferAmount,
          recipientId,
          userId,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        setMessage(response.data.message);
        setTransferAmount("");
        setRecipientId("");

        // Refresh account and user data
        axios
          .get(`${apiUrl}/account/${userId}`)
          .then((response) => setAccount(response.data.account));

        axios
          .get(`${apiUrl}/accounts`)
          .then((response) => setUsers(response.data.money));
      })
      .catch((error) => {
        const errorMsg = error.response?.data?.message || "Transfer failed";
        setMessage(errorMsg);
        console.error("Transfer error:", error);
      });
  };

  return (
    <>
      <GoBack />
      <ShowHint />
      <div className="idorlab-container">
        <div className="idorlab-header">
          <h1>Money Transfer</h1>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => {
              setTransferAmount("");
              setRecipientId("");
              setMessage("");
            }}
          >
            Reset
          </button>
        </div>

        <div className="idorlab-account-info">
          <div className="card-transfer">
            <div className="card-header-transfer">
              Account Name: <b>{account.name}</b> <br />
              Balance: <b>{account.balance} $</b>
            </div>
          </div>
        </div>

        {message && (
          <div
            className={`alert ${
              message.includes("success") ? "alert-success" : "alert-danger"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleTransfer} className="idorlab-transfer-form">
          <div className="form-group">
            <label htmlFor="transfer_amount">Transfer Amount:</label>
            <input
              type="number"
              id="transfer_amount"
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
              required
            />

            <label htmlFor="recipient_id">Recipient ID:</label>
            <input
              type="number"
              id="recipient_id"
              value={recipientId}
              onChange={(e) => setRecipientId(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Transfer
          </button>
        </form>

        <table className="table">
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
    </>
  );
}
