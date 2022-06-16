import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import CardProducts from '../components/CardProducts/CardProducts';
import './App.css';

function App() {
  const [user, setUser] = useState<string | null>();



  return (
    <div className="App">
      <Header user={user} setUser={setUser}/>
      {
        user ?
        (
        <CardProducts />
        ): null
      }
    </div>
  );
}

export default App;
