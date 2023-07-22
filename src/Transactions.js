import React, { useState, useEffect } from "react";
import "./index.css"
import NewTransaction from "./Newtransaction";
import Searchbar from "./Searchbar";


function Transactions() {
  const [transactions, setTransactions] = useState([]);
  
//fetch the transcations
useEffect(() => {
  fetch("http://localhost:3000/transactions")
    .then((r) => r.json())
    .then((data) => {
      console.log("Fetched data:", data)
      data.sort((a, b) =>
      a.category.toLowerCase().localeCompare(b.category.toLowerCase())
    
    );
      setTransactions(data)
      });
     
},[]); 
  //adds a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    
  };

 // Filter transactions based on the entered description
  const handleSearch = (description) => {
   
    if (description.trim() === "" || description === null) {
      //display all the transactions
      fetch("http://localhost:3000/transactions")
    .then((r) => r.json())
    .then((data) => {
      console.log("Fetched data:", data)
      data.sort((a, b) =>
      a.category.toLowerCase().localeCompare(b.category.toLowerCase())
    
    );
      setTransactions(data)

     });
    } else {
      // Filter transactions based on the entered description
      const filtered = transactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(description.toLowerCase())
      );
      filtered.sort((a, b) =>
      a.category.toLowerCase().localeCompare(b.category.toLowerCase())
    
    );
      setTransactions(filtered);
      console.log(filtered)
    }
   
 
};



 

  // Check if transactions array is empty or undefined before rendering
  
 
  return  (
    <>
      <h1>Transactions</h1>
      <Searchbar onSearch={handleSearch} />
      {transactions.length === 0 ? (
        <p>Transaction not found</p>
      ) : (
        <table>
          <thead>
           <tr>
           <th style={{ backgroundColor: "#f79771" }}>Date</th>
            <th style={{ backgroundColor: "#a29bfe" }}>Description</th>
            <th style={{ backgroundColor: "#74b9ff" }}>Category</th>
            <th style={{ backgroundColor: "#55efc4" }}>Amount</th>
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
      )}
      <NewTransaction addTransaction={addTransaction} />
    </>
  );
}
export default Transactions