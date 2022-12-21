import { useState } from 'react';

function Contract({ nfts }) {
    const [result, setResult] = useState(nfts);

    const renderItems = () => {
        return result.map(({ tokenHash, tokenId, blockNumberMinted, amount, name, metadata }) => {

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
            <div class="container-fluid">
                <h3 class="fw-semibold">NFT Gallery</h3>
                <h5>Search for an NFT Collection by Contract</h5>
                <form 
                    class="d-flex" 
                    role="search" 
                    style={{width: "35rem", 
                    height: "3rem"}}
                    method="POST"
                    action="#"
                >
                <input 
                    class="form-control me-3" 
                    type="text" 
                    placeholder="NFT Contract Address" 
                    aria-label="Search Contract Address" 
                    id="contractAddress" 
                    name="contractAddress"
                    required
                />
                <button 
                    class="btn btn-outline-success" 
                >Search
                </button>
                </form>
            </div>
            <div class="row">
                {renderItems()}
            </div>
        </>
    );
}

    Contract.getInitialProps = async (ctx) => {
        const res = await fetch(`http://localhost:3000/api/nftsByContract`)
        const json = await res.json()
        return { nfts: json.contractNfts }
    }

export default Contract;