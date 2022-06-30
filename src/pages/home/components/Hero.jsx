import React, { useState, useRef, useEffect } from 'react'
import { Container, Image, Row, ListGroup, Modal } from 'react-bootstrap'
import HeroBanner from '../../../assets/images/banner.jpg'
import Instagram from '../../../assets/images/instagram@2x.png'
import Discord from '../../../assets/images/discord@2x.png'
import Twitter from '../../../assets/images/twiter@2x.png'
import banner from '../../../assets/images/collections/banner1.jpg'
import { CONTACT_ADDRESS_NFT, CONTACT_ABI_NFT } from '../../../contract/nftContract'

import Web3 from "web3";
const web3_Stake = new Web3(window.ethereum);
console.log("web3_Stake", web3_Stake);

export default function Hero() {
    const Mint_NFT_btn = useRef(null);
    const circular_innerDiv = useRef(null);
    const circularDiv1 = useRef(null);
    const circularDiv = useRef(null);

    async function check() {
        const provider = window.ethereum;
        if (provider) {
            try {
                // const binanceTestChainId = '0x61'
                await provider.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x4' }],
                });

                console.log("You have succefully switched to Binance Test network")
                // checkConnection();
            } catch (switchError) {
                console.log("Failed to switch to the network")
            }
        } else {
            console.log("not ")
            // setShow(true)
        }
    }

    function checkConnection() {
        console.log("You're not connected to checkConnection");
        // window.ethereum.request({ method: 'eth_accounts' }).then(handleAccountsChanged).catch(console.error);
        var chainId = window.ethereum.chainId;

        if (chainId == 0x4) {
            var chain = "ETH";
            // setChainId(chain)
        } else if (chainId == 0x61) {
            var chain = "BNB";
            // setChainId(chain)
        }
        if (chainId) {
            sessionStorage.setItem("chainNetwork", chain);
        }
    }

    const mintNFT = async (e) => {
        Mint_NFT_btn.current.setAttribute('disabled', '');
        Mint_NFT_btn.current.style.color = "#875e00";
        Mint_NFT_btn.current.innerText = 'Minting..';

        circular_innerDiv.current.style.backgroundColor = '#ffe8ad';
        circular_innerDiv.current.style.boxShadow = '0px 0px 20px 5px #ffb200';

        circularDiv1.current.style.backgroundColor = '#875e00';
        circularDiv.current.style.backgroundColor = '#875e00';


        await check()
        // =================================================================================
        console.log("event", e.target.id)
        console.log('mintNft');
        await window.ethereum.enable().then((address) => {
            var loginUserAddress = address[0];
            // console.log(address,'this is the data we got ')

            const NFT_Collection = new web3_Stake.eth.Contract(CONTACT_ABI_NFT, CONTACT_ADDRESS_NFT);

            const web_value = Web3.utils.toWei(e.target.id, 'ether');
            console.log(web_value);

            var tokenPirce = 0.05;
            console.log(" e.target.id", e.target.id);
            var totalAmount = tokenPirce * e.target.id;
            // console.log(" e.target.id", e.target.id);
            // var web_totalAmountBigNumbrt = web3.utils.toWei('0.05', 'totalAmount');

            console.log('tokenPirce', tokenPirce);
            console.log('totalAmount', totalAmount);
            // var amount = totalAmount.toFixed(5);
            var tokens = Web3.utils.toWei(totalAmount.toString(), 'ether')
            var bntokens = Web3.utils.toBN(tokens)

            console.log('tokens', tokens);
            console.log('weiValue', bntokens);
            console.log("210000*e.target.id,", 100000 * e.target.id);

            NFT_Collection.methods.mint(loginUserAddress, e.target.id)
                // console.log(e.target.id)
                .send(
                    {
                        from: loginUserAddress,
                        gas: 165000 * e.target.id,
                        // gas:200000*e.target.id,
                        // value: web_value,
                        // value:5
                        value: bntokens,
                        // gasPrice:'130000000000',
                        // gasPrice: '5400000000',
                    }
                )
                .on('error', function (error) {
                    console.log('error');
                    // location.reload();
                    Mint_NFT_btn.current.removeAttribute('disabled', '')
                    Mint_NFT_btn.current.style.color = "#319f42";
                    Mint_NFT_btn.current.innerText = 'Mint NFT';
            
                    circular_innerDiv.current.style.backgroundColor = '#dfffe4';
                    circular_innerDiv.current.style.boxShadow = '0px 0px 20px 5px #008715';
            
                    circularDiv1.current.style.backgroundColor = '#66e98c';
                    circularDiv.current.style.backgroundColor = '#66e98c';
                }).then(function (info) {
                    console.log('success ', info);
                    Mint_NFT_btn.current.removeAttribute('disabled', '')
                    Mint_NFT_btn.current.style.color = "#319f42";
                    Mint_NFT_btn.current.innerText = 'Mint NFT';
            
                    circular_innerDiv.current.style.backgroundColor = '#dfffe4';
                    circular_innerDiv.current.style.boxShadow = '0px 0px 20px 5px #008715';
            
                    circularDiv1.current.style.backgroundColor = '#66e98c';
                    circularDiv.current.style.backgroundColor = '#66e98c';
                });
            setShow(false)
        });
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // console.log("Mint_NFT_btn", Mint_NFT_btn.current);



    return (
        <>
            <div className="home_heroDiv hero_ d-none d-lg-block">

                <div className='circular_outerDiv'>
                    <div className='circularDiv' ref={circularDiv}>
                    </div>
                    <div className='circularDiv1' ref={circularDiv1}>
                    </div>
                    <div className='circular_innerDiv' ref={circular_innerDiv}>
                        <button ref={Mint_NFT_btn} onClick={handleShow} className='circular_innerText'>Mint NFT</button>
                    </div>
                </div>
            </div>
            <div className='mintPopupDiv'>
                <Modal show={show} onHide={handleClose} className="mintPopup" backdrop="static" keyboard={false} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Choose Nft to Mint</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='mint-modal'>
                        <ListGroup className="mint-modal-list">

                            <ListGroup.Item className='mint-item' onClick={mintNFT} id="1" >Mint 1 Nft</ListGroup.Item>
                            <ListGroup.Item className='mint-item' onClick={mintNFT} id="2" >Mint 2 Nft</ListGroup.Item>
                            <ListGroup.Item className='mint-item' onClick={mintNFT} id="3" >Mint 3 Nft</ListGroup.Item>
                            <ListGroup.Item className='mint-item' onClick={mintNFT} id="4" >Mint 4 Nft</ListGroup.Item>
                            <ListGroup.Item className='mint-item' onClick={mintNFT} id="5" >Mint 5 Nft</ListGroup.Item>
                            <ListGroup.Item className='mint-item' onClick={mintNFT} id="6" >Mint 6 Nft</ListGroup.Item>
                            <ListGroup.Item className='mint-item' onClick={mintNFT} id="7" >Mint 7 Nft</ListGroup.Item>
                            <ListGroup.Item className='mint-item' onClick={mintNFT} id="8" >Mint 8 Nft</ListGroup.Item>
                            <ListGroup.Item className='mint-item' onClick={mintNFT} id="9" >Mint 9 Nft</ListGroup.Item>
                            <ListGroup.Item className='mint-item' onClick={mintNFT} id="10" >Mint 10 Nft</ListGroup.Item>
                        </ListGroup>
                    </Modal.Body>
                </Modal>
            </div>

            <div className="home_heroDiv_ d-block d-lg-none">
                <Image src={banner} alt="CryptoBear Watch Club" />
            </div>

            <Container className="d-block d-lg-none">
                <Row>
                    <ul className="social_mobile">
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/cryptobearwatchclub/?utm_medium=copy_link">
                                <Image src={Instagram} alt="CryptoBear Watch Club instagram" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://discord.gg/cryptobearwatchclub">
                                <Image src={Discord} alt="CryptoBear Watch Club discord" />
                            </a></li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/CryptoBearWC">
                                <Image src={Twitter} alt="CryptoBear Watch Club twitter" />
                            </a></li>
                    </ul>
                </Row>
            </Container>
        </>
    )
}
