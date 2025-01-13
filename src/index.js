import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';

import { UserContextProvider } from './components/contextindex1';  // Import renamed provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider> {/* Use the correct name */}
    <App />
  </UserContextProvider>
);
