import React, { useState } from 'react';
import Weather from './components/Weather';
import Login from './components/Login';


function App() {
  // State to track whether the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app">
      {/* 
        Render the login component if the user is not logged in (isLoggedIn is false),
        otherwise render the weather component
      */}
      {!isLoggedIn ? <Login onLogin={handleSuccessfulLogin} /> : <Weather />}
    </div>
  );
}

export default App;


