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
      //sort the fetched array alphabetically according to the category
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
   
    if (description === "" || description === null) {
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
    } 
    else {
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


const handleDelete = (id) => {
  // Filter out the transaction with the given id and update the transactions state
  const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
  setTransactions(updatedTransactions);
};

const handleSortAscending = () => {
  const sortedTransactions = [...transactions].sort((a, b) => new Date(a.date) - new Date(b.date));
  setTransactions(sortedTransactions);
};

const handleSortDescending = () => {
  const sortedTransactions = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
  setTransactions(sortedTransactions);
};

 

  
  return  (
    <>
      <h1>Transactions</h1>
      <Searchbar onSearch={handleSearch} />
     
      {/*display transaction if description match and Transaction not found if there is no description that matches the search*/}
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
            <th style={{ backgroundColor: "red" }}>Delete</th>
            
      </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
                <td>
                  <button onClick={() => handleDelete(transaction.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div >
        <div>
      <NewTransaction addTransaction={addTransaction} />
         </div>
       <div className="section2" style={{ display: "flex" }}>
        <h2>Sort by date:</h2>
        <button onClick={handleSortAscending}>Ascending</button>
        <button onClick={handleSortDescending }>Descending</button>
      </div>
      </div>
    </>
  );
}
export default Transactions