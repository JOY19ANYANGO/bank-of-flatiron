import React,{useState} from "react";
function NewTransaction({ addTransaction }){
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");


  const handleDateChange = (event) => {
    setDate(event.target.value);
  };


  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };


  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };


  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new transaction object using the form data
    const newTransaction = {
      date: date,
      description: description,
      category: category,
      amount: parseFloat(amount), // Convert the amount to a number
    };
    addTransaction(newTransaction);
   
    // Clear the form fields after submission
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  };


    return(
      <>
      <h1>New Transaction</h1>
        <form>
            <label>Date:</label>
            <input type="date" value={date} onChange={handleDateChange} /><br></br>
            <label>Description</label>
            <input type="text" value={description} onChange={handleDescriptionChange}/><br></br>
            <label>Category</label>
            <input type="text" value={category} onChange={handleCategoryChange} /><br></br>
            <label>Amount</label>
            <input type="number" value={amount} onChange={handleAmountChange} /><br></br>
            <button type="submit" onClick={handleSubmit }>Add Transaction</button><br></br>
        </form>
        </>
    )
}
export default NewTransaction