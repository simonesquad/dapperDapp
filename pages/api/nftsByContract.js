import Moralis  from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

export default async function handler(req, res) {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY});

    const address = '0xC178994cB9b66307Cd62dB8b411759Dd36D9C2EE';

    const chain = EvmChain.ETHEREUM;

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
