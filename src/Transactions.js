import React, { useState, useEffect } from "react";
import "./index.css"
import NewTransaction from "./Newtransaction";


function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((r) => r.json())
      .then((data) => {
        console.log("Fetched data:", data)
        setTransactions(data)});
  },[]);

  // Check if transactions array is empty or undefined before rendering
  if (!transactions || transactions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <NewTransaction addTransaction={addTransaction} />
    </>
  );
}

export default Transactions;
