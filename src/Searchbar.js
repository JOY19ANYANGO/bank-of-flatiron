import React,{useState} from "react";
 function Searchbar(){
  const [description,setDescription]=useState("")
  function handleSearch(event){
    setDescription(event.target.value)
  }
   return(
      <input type="text" placeholder="search transaction description" onChange={handleSearch}/>
   )
 }

export default Searchbar;