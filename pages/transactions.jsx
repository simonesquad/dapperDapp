import { useState } from 'react';
import Layout from './components/layout';

const TITLES = [
    'Value', 'Block Number', 'Total Gas Used', 'Gas Price at Time', 'Timestamp'
]

function Transactions({ transactions }) {
    const [values, setValues] = useState(transactions);

    const renderValues = () => {
        return values.map(({ hash, value, blockNumber, cumulativeGasUsed, gasPrice, blockTimestamp }) => {
            return <tr key={hash} >
                <td>{value}</td>
                <td>{blockNumber}</td>
                <td>{cumulativeGasUsed}</td>
                <td>{gasPrice}</td>
                <td>{blockTimestamp}</td>
            </tr>
        })
    }

    const renderHeader = () => {
        return <tr>
            {TITLES.map(x => <th>{x}</th>)}
        </tr>
    }

    return (
        <Layout>
            <div>
                <p>Wallet Transactions:</p>
                <div>
                    <table class="table">
                            {renderHeader()}
                        <tbody>
                            {renderValues()}
                        </tbody>
                    </table>
                </div>       
            </div>
        </Layout>
    );
}

Transactions.getInitialProps = async (ctx) => {
    const res = await fetch(`http://localhost:3000/api/transactions`)
    const json = await res.json()
    return { transactions: json.walletTransactions }
}

export default Transactions;