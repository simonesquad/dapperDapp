import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';
import { CryptoLogos } from '@web3uikit/core';

function Native({ nativeBalance, address }) {
    return (
        <div class="d-flex flex-column mb-3">
            <div class="p-2">
                <h3>Wallet: {address}</h3>
            </div>
            <div class="p-2">
                <h3>Native Balance: {nativeBalance} ETH</h3>
                <CryptoLogos 
                    chain="ethereum"
                    size="48px"
                />
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  const address = process.env.METAMASK_ADDRESS;

  const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
      chain: EvmChain.ETHEREUM,
      address,
  });

    return {
        props: { 
            address,
            nativeBalance: nativeBalance.result.balance.ether 
        },
    };
    }

export default Native;