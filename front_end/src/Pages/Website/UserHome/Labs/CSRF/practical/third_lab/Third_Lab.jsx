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

  // Fetch users on initial load
  useEffect(() => {
    axios
      .get(`${apiUrl}/CSRF-accounts`)
      .then((response) => {
        const usersData = response.data.money.slice(0, 2);
        setUsers(usersData);

        // Set userId to the first user's ID
        if (usersData.length > 0) {
          setUserId(usersData[0].id);
        }

        // Set recipientId and recipientName to the second user's ID and name
        if (usersData.length > 1) {
          setRecipientId(usersData[1].id);
          setRecipientName(usersData[1].name);
        }
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Fetch account details when userId changes
  useEffect(() => {
    if (userId) {
      axios
        .get(`${apiUrl}/CSRF-account/${userId}`)
        .then((response) => {
          setAccount(response.data.account);
        })
        .catch((error) => console.error("Error fetching account:", error));
    }
  }, [userId]);

  const handleTransfer = (e) => {
    e.preventDefault();

    // Debugging: Log recipientId and userId
    console.log("Recipient ID:", recipientId);
    console.log("User ID:", userId);

    // Ensure recipientId and userId are set
    if (!recipientId || !userId) {
      setMessage("Recipient or sender information is missing.");
      return;
    }

    // Proceed with the transfer
    axios
      .post(`${apiUrl}/CSRF-transfer`, {
        transferAmount: Number(transferAmount),
        recipientId: Number(recipientId),
        userId: Number(userId),
      })
      .then((response) => {
        setMessage(response.data.message);
        setTransferAmount("");

        // Refresh user and account data
        axios.get(`${apiUrl}/CSRF-accounts`).then((response) => {
          const usersData = response.data.money.slice(0, 2);
          setUsers(usersData);

          // Update recipientId and recipientName if necessary
          if (usersData.length > 1) {
            setRecipientId(usersData[1].id);
            setRecipientName(usersData[1].name);
          }
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
          {users.length > 0 ? (
            <>
              <p className="card-text">
                Sender Name: <b>{users[0].name}</b>
              </p>
              <p className="card-text">
                Balance: <b>{users[0].balance} $</b>
              </p>
            </>
          ) : (
            <p>Loading account information...</p>
          )}
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
            readOnly
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
            min="0"
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
