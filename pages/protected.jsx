import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';
import { NFTBalance } from '@web3uikit/core';


function Protected({ message, nftList, address }) {

    return (
        <>
            <div>
                <h3>Protected content</h3>
                <p>{message}</p>
                <pre>{JSON.stringify(nftList, null, 2)}</pre>
                <section>
                    {nftList}
                    {/* <NFTBalance 
                        address={address}
                        chain='ethereum'
                    /> */}
                </section>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  const address = process.env.METAMASK_ADDRESS,

  const nftList = await Moralis.EvmApi.nft.getWalletNFTs({
      chain: EvmChain.ETHEREUM,
      address,
    });

    return {
        props: {
            message:
                // if user has at least one NFT he will get congrats message
                nftList.raw.total > 0 ? 'Nice! You have our NFT' : "Sorry, you don't have our NFT",
            address
        },
    };
}

export default Protected;