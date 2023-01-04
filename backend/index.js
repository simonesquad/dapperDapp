const express = require("express");
const Moralis = require("moralis").default;
require("dotenv").config();
const app = express();
const cors = require("cors");
const port = 5000;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

app.use(cors());

app.get("/api/contract", async (req, res) => {
  
  const { query } = req;
  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    address: query.address,
    chain: chain
  })

  console.log(response);
  res.send(response);

});

Moralis.start({
  apiKey: process.env.MORALIS_API_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});