import React from 'react';
import ReactDOM from 'react-dom/client';
import Searchbar from './Searchbar';
import Transactions from './Transactions';
import NewTransaction from './Newtransaction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Searchbar />
    <Transactions/>
   
  </React.StrictMode>
);
