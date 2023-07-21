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
    // Perform any other actions with the new transaction data,
    // such as saving it to a list of transactions or making an API request.

    // Clear the form fields after submission
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  };


    return(
        <form>
            <label>Date:</label>
            <input type="date" value={date} onChange={handleDateChange} />
            <label>Description</label>
            <input type="text" value={description} onChange={handleDescriptionChange}/>
            <label>Category</label>
            <input type="text" value={category} onChange={handleCategoryChange} />
            <label>Amount</label>
            <input type="number" value={amount} onChange={handleAmountChange} />
            <button type="submit" onClick={handleSubmit }>Add Transaction</button>
        </form>
    )
}
export default NewTransaction