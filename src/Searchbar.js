import React,{useState} from "react";
 function Searchbar(){
  const [search,setSearch]=useState("")
  function handleSearch(event){
    setSearch(event.target.value)
  }
   return(
      <input type="text" placeholder="search transaction description" onChange={handleSearch}/>
   )
 }

export default Searchbar;