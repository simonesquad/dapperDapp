import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from "react-moralis";
import './index.css';
import App from './App';

ReactDOM.render(
  <MoralisProvider>
    <App />
  </MoralisProvider>,
  document.getElementById("root"),
);

