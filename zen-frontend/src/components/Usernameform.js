// components/UsernameForm.js
"use client"
import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import Tree from './Tree';

const UsernameForm = () => {
  const { username, setUsername } = useContext(UserContext);
  const [inputUsername, setInputUsername] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    if (inputUsername) {
      setUsername(inputUsername);
      setIsAuthenticated(true);
    }
  };

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <input
            type="text"
            placeholder="Enter your username"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <Tree />
      )}
    </div>
  );
};

export default UsernameForm;
