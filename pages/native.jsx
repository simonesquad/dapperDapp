import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';
import { CryptoLogos } from '@web3uikit/core';
import Layout from './components/layout';
import Link from 'next/link';

function Native({ nativeBalance, address }) {
    return (
        <Layout>
            <div class="container-fluid">
                <div class="col-6">
                <div class="row">
                    <div class="card" style={{ width: "38rem" }}>
                        <div class="card-header">
                            Your Native Balance
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                            <h6>Wallet: {address}</h6>
                            </li>
                            <li class="list-group-item">
                            <h6>Native Balance: {nativeBalance}</h6>
                            <CryptoLogos 
                                chain="ethereum"
                                size="28px"
                            />
                            </li>
                        </ul>    
                    </div>
                </div>
                
                <div class="row">
                    <Link href="/">
                    <button type="button" class="btn btn-secondary">Back</button>
                    </Link>
                </div>
                </div>
            </div>
        </Layout>
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