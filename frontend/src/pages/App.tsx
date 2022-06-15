import React, { useState } from 'react';
import Header from '../components/Header/Header';
import './App.css';

function App() {
  const [user, setUser] = useState<string | null>();
  return (
    <div className="App">
      <Header user={user} setUser={setUser}/>
    </div>
  );
}

export default App;
