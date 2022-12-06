import { useState } from 'react';

function Contract({ nfts }) {
    const [items, setItems] = useState(nfts);

    const renderItems = () => {
        return items.map(({ tokenHash, tokenAddress, tokenId, blockNumberMinted, amount, contractType, name, symbol, tokenUri, metadata, lastTokenUriSync, lastMetadataSync, minterAddress, chain }) => {
            return <ul key={tokenHash}>
                    <li>{tokenAddress}</li>
                    <li>{tokenId}</li>
                    <li>{blockNumberMinted}</li>
                    <li>{amount}</li>
                    <li>{contractType}</li>
                    <li>{name}</li>
                    <li>{symbol}</li>
                    <li>{tokenUri}</li>
                    <li>{minterAddress}</li>
                    <li>{chain}</li>
                    <li>{lastTokenUriSync}</li>
                    <li>{lastMetadataSync}</li>
                    {/* <img src={metadata.image} alt="find-img" /> */}
                </ul>
        })
    }

    return (
        <div>
            {renderItems()}
        </div>
    );
}

    Contract.getInitialProps = async (ctx) => {
        const res = await fetch(`http://localhost:3000/api/nftsByContract`)
        const json = await res.json()
        return { nfts: json.contractNfts }
    }

    export default Contract;



    // const toString = JSON.stringify(nfts)
    // const [nftDisplays, setNftDisplays] = useState(nfts);

    // const renderNfts = () => {
    //     return nftDisplays.map(({ amount, block_number, block_number_minted, contract_type, last_metadata_sync, last_token_uri_sync, metadata, minter_address, name, owner_of, symbol, token_address, token_hash, token_id, token_uri, transfer_index }) => {
    //         return <NFTCard
    //                     chain="Ethereum"
    //                     moralisApiResult={{
    //                         // amount: amount,
    //                         // block_number: block_number,
    //                         // block_number_minted: block_number_minted,
    //                         // contract_type: contract_type,
    //                         // last_metadata_sync: last_metadata_sync,
    //                         // last_token_uri_sync: last_token_uri_sync,
    //                         // metadata: metadata,
    //                         // minter_address: minter_address,
    //                         // name: name,
    //                         // owner_of: owner_of,
    //                         // symbol: symbol,
    //                         // token_address: token_address,
    //                         // token_hash: token_hash,
    //                         // token_id: token_id,
    //                         // token_uri: token_uri,
    //                         // transfer_index: transfer_index
    //                     }}
    //                 />    
    //     })
    // }