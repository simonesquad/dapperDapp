import React from 'react'
import axios from "axios";

function Tokens({wallet, chain, tokens, setTokens}) {

    async function getTokenBalances() {
        const response = await axios.get("http://localhost:8080/tokenBalances", {
            params: {
                address: wallet,
                chain: chain,
            },
        });

        if(response.data) {
            let t = response.data;

            for (let i = 0; i < t.length; i++) {
                
            }
        }

    }

  return (
    <div>Tokens</div>
  )
}

export default Tokens