import React, { useState } from 'react';
import Weather from './components/Weather';
import Login from './components/Login';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app">
      
      {!isLoggedIn ? <Login onLogin={handleSuccessfulLogin} /> : <Weather />}
    </div>
  );
}

export default App;


