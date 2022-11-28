import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

// style stuff //
import { ENSAvatar } from '@web3uikit/core';

// props are passed from getServerSideProps
function Native({ nativeBalance, address }) {
    return (
        <div>
            <h3>Wallet: {address}</h3>
            <h3>Native Balance: {nativeBalance} ETH</h3>
            {/* <h3>Token Balance: {tokenBalances} </h3> */}
    
            {/* <ENSAvatar
            address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
            size={100}/> */}
        </div>
    );
}

// This gets called on every page render
export async function getServerSideProps(context) {
  // reads the api key from .env.local and starts Moralis SDK
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  const address = process.env.METAMASK_ADDRESS;

  const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
      chain: EvmChain.ETHEREUM,
      address,
  });

//   const tokenBalances = await Moralis.EvmApi.token.getWalletTokenBalances({
//     chain: EvmChain.ETHEREUM,
//     address,
//   }),

    return {
        props: { 
            address,
            // Return the native balance formatted in ether via the .ether getter
            nativeBalance: nativeBalance.result.balance.ether
            // tokenBalances: tokenBalances.result.map((token) => token.display()) 
        },
    };
    }

export default Native;