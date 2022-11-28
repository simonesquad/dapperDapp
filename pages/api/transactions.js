import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

export default async function handler(req, res) {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY});

    const address = process.env.METAMASK_ADDRESS;

    const [walletTransactions] = await Promise.all([
        Moralis.EvmApi.transaction.getWalletTransactions({
            address,
            chain: EvmChain.ETHEREUM
        }),
    ]);
    res.status(200).json({
        walletTransactions: walletTransactions.result.map((transaction) => transaction),
    });
}