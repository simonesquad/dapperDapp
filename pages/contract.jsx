import { useState } from 'react';

function Contract({ nfts }) {
    const [items, setItems] = useState(nfts);

    const renderItems = () => {
        return items.map(({ tokenHash, tokenId, blockNumberMinted, amount, name, metadata }) => {

            function getImgUrl(metadata) {

                if (!metadata.image.includes("ipfs://")) {
                    return metadata.image;
                } else {
                    return "https://ipfs.io/ipfs/" + metadata.image.substring(7);
                }
            }


            return <div key={tokenHash} class="card" style={{width: "25rem", padding: "2rem", margin: "2rem", backgroundColor: "#FFFFF7"}}>
                        <img src={getImgUrl(metadata)} class="card-img-top" alt="why" />
                        <div class="card-body">
                            <h6 class="card-title">Name: {name}</h6>
                            <p class="card-text">Token Id: {tokenId}</p>
                            <p class="card-text">Block Number Minted: {blockNumberMinted}</p>
                            <p class="card-text">Amount Minted: {amount}</p>
                        </div>
                    </div>

        })
    }

    return (
        <>
            <div class="row">
                {renderItems()}
            </div>
        </>
    );
}

    Contract.getInitialProps = async (ctx) => {
        const res = await fetch(`http://localhost:3000/api/nftsByContract`)
        const json = await res.json()
        return { 
            nfts: json.contractNfts 
        }
    }

    export default Contract;