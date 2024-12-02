import React, { useState, useEffect } from "react";
import "./IDOR_Lab2.css";
import GoBack_Btn from "../../../GoBack_Btn/GoBack_Btn";
import GoBack from "../../../GoBack_Btn/GoBack_Btn";
import ShowHint from "../../../ShowHint_Btn/ShowHint_Btn";

const IDOR_Lab2 = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [accountBalance, setAccountBalance] = useState(500); // Default balance set to 500
  const ticketPrice = 10;

  // Fetch the account balance when the component mounts
  useEffect(() => {
    const fetchAccountBalance = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8080/api/accountbalance"
        );
        if (response.ok) {
          const data = await response.json();
          setAccountBalance(data.accountBalance);
        } else {
          setMessage("Failed to fetch account balance.");
        }
      } catch (error) {
        setMessage("An error occurred while fetching the account balance.");
      }
    };

    fetchAccountBalance();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ticketAmount = Number(amount);

    if (ticketAmount <= 0) {
      setMessage("The number of tickets must be greater than 0.");
      return;
    }

    const totalCost = ticketPrice * ticketAmount;

    if (accountBalance < totalCost) {
      setMessage("Insufficient funds to purchase the tickets.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8080/api/ticketsales", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: ticketAmount }),
      });

      if (response.ok) {
        setAccountBalance(accountBalance - totalCost);
        setMessage(
          `Successfully purchased ${ticketAmount} tickets for $${totalCost}.`
        );
      } else {
        setMessage("Failed to process the purchase. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <GoBack />
      <ShowHint />
      <div className="unique-ticket-container">
        <div className="unique-ticket-header">
          <h1>Buy Tickets</h1>
          <p>Price per ticket: ${ticketPrice}</p>
          <p>Amount of money in your account: ${accountBalance}</p>
        </div>

        {message && <div className="unique-ticket-alert">{message}</div>}

        <form onSubmit={handleSubmit} className="unique-ticket-form">
          <label htmlFor="amount" className="unique-ticket-label">
            Number of Tickets
          </label>
          <input
            type="number"
            id="amount"
            className="unique-ticket-input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter ticket amount"
            required
          />
          <button type="submit" className="unique-ticket-btn">
            Buy
          </button>
        </form>
      </div>
    </>
  );
};

export default IDOR_Lab2;
