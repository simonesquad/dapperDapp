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

export async function getServerSideProps() {
  const res = await fetch(`https://localhost:3000/api/transactions`)
  const walletTransactions = await res.json()

    return {
        props: { 
            walletTransactions
        },
    };
    }

export default Transactions;