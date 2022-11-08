import React from 'react';
import ReactDOM from 'react-dom/client';
import { MoralisProvider } from "react-moralis";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MoralisProvider appId="001" serverUrl="http://localhost:1337/server">
    <App />
  </MoralisProvider>
);

