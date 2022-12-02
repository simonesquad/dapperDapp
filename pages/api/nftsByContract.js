import Moralis  from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

export default async function handler(req, res) {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY});

    const chain = EvmChain.ETHEREUM;

    const address = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';

    const totalRanges = 1000;

    const range = 1;

    const [contractNfts] = await Promise.all([
        Moralis.EvmApi.nft.getContractNFTs({
            address,
            chain,
            totalRanges,
            range,
        }),
    ]);

    res.status(200).json({
        contractNfts: contractNfts.result.map((nft) => nft),
    });
}