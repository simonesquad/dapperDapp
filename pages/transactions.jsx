import { Table } from '@web3uikit/core';

function Transactions({ transactions }) {
    return (
        <div>
            <p>Wallet Transactions:</p>
            <div>
                <table>
                    
                    <tr>
                    {transactions.map((transaction) => (
                        <td key={transaction.hash}>{transaction.value}/</td>
                        ))}
                    </tr>
                    
                    <tr>
                    {transactions.map((transaction) => (
                        <td key={transaction.hash}>{transaction.blockNumber}/</td>
                        ))}
                    </tr>

                    <tr>
                    {transactions.map((transaction) => (
                        <td key={transaction.hash}>{transaction.cumulativeGasUsed}/</td>
                        ))}
                    </tr>

                    <tr>
                    {transactions.map((transaction) => (
                        <td key={transaction.hash}>{transaction.gasPrice}/</td>
                        ))}
                    </tr>

                    <tr>
                    {transactions.map((transaction) => (
                        <td key={transaction.hash}>{transaction.blockTimestamp}/</td>
                        ))}
                    </tr>
                </table>
            </div>       
        </div>
    );
}

Transactions.getInitialProps = async (ctx) => {
    const res = await fetch(`http://localhost:3000/api/transactions`)
    const json = await res.json()
    return { transactions: json.walletTransactions }
}

export default Transactions;