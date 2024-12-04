import React, { useState, useEffect } from "react";
import "./IDOR_Lab3.css";
import axios from "axios";
import GoBack from "../../../GoBack_Btn/GoBack_Btn";
import ShowHint from "../../../ShowHint_Btn/ShowHint_Btn";

export default function IDORLabComponent() {
  const [account, setAccount] = useState({ name: "", money: 0 });
  const [users, setUsers] = useState([]);
  const [transferAmount, setTransferAmount] = useState("");
  const [recipientId, setRecipientId] = useState("");
  const [message, setMessage] = useState("");
  const userId = 1;

  const apiUrl = "http://127.0.0.1:8080/api"; // Set the base API URL here

  useEffect(() => {
    axios.get(`${apiUrl}/account/${userId}`).then((response) => {
      setAccount(response.data);
    });

    axios.get(`${apiUrl}/accounts`).then((response) => {
      setUsers(response.data);
    });
  }, [userId]);

  const handleTransfer = (e) => {
    e.preventDefault();
    axios
      .post(`${apiUrl}/transfer`, {
        transfer_amount: transferAmount,
        recipient_id: recipientId,
        sender_id: userId,
      })
      .then((response) => {
        setMessage(response.data.message);
        setTransferAmount("");
        setRecipientId("");
        axios
          .get(`${apiUrl}/account/${userId}`)
          .then((response) => setAccount(response.data));
        axios
          .get(`${apiUrl}/accounts`)
          .then((response) => setUsers(response.data));
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };

  return (
    <>
      <GoBack />
      <ShowHint />
      <div className="idorlab-container">
        <div className="idorlab-header">
          <h1>Money Transfer</h1>
          <button className="btn btn-secondary btn-sm">Reset</button>
        </div>
        <div className="idorlab-account-info">
          <div className="card">
            <div className="card-header">
              Account Name: <b>{account.name}</b> <br />
              Balance: <b>{account.money} $</b>
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
                <td>{user.money} $</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
