import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

function Transactions({ address, walletTransactions }) {
    return (
        <div>
            <h3>Wallet: {address}</h3>
            <p>Wallet Transactions:</p>
            <ul>
                {walletTransactions.map((walletTransaction) => (
                    <li key={walletTransaction}>{walletTransaction}</li>
                ))}
            </ul>
        </div>
    );
}

export async function getServerSideProps(context) {
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  const address = process.env.METAMASK_ADDRESS;

  const walletTransactions = await Moralis.EvmApi.transaction.getWalletTransactions({
      chain: EvmChain.ETHEREUM,
      address
  });
  console.log(walletTransactions);

    return {
        props: { 
            address,
            walletTransactions: walletTransactions.result
        },
    };
    }

export default Transactions;