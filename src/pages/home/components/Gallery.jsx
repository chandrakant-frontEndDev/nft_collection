import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import img1 from '../../../assets/images/collections/1.png'
import Footer from '../../../common/Footer';
import Header from '../../../common/Header';
import InfiniteScroll from 'react-infinite-scroll-component';
// import GalleryNft from './GalleryNft';
// import GalleryLoader from './GalleryLoader';
import { CONTACT_ADDRESS_NFT, CONTACT_ABI_NFT } from '../../../contract/nftContract'

import Web3 from "web3";
const web3_Stake = new Web3(window.ethereum);
console.log("web3_Stake", web3_Stake);

const Gallery = () => {
    // const [items, setItems] = useState([]);
    // const [noMore, setNoMore] = useState(true)
    // const [page, setPage] = useState(2);
    const [load, setLoad] = useState(false);
    const [nft, setNft] = useState([]);
    var images = [];

    async function test() {
        setLoad(true)
        const NFT_Collection = new web3_Stake.eth.Contract(CONTACT_ABI_NFT, CONTACT_ADDRESS_NFT);
        await NFT_Collection.methods.totalSupply().call().then(res => {
            console.log("res", res);
            setTimeout(() => {
                setLoad(false)
            }, 4000);
            for (let i = 1; i <= res; i++) {
                // setItems(items.push(`https://infograinsdevelopment.com/NFTCollections/bouquet/images/${i}.png`))
                images.push(`https://infograinsdevelopment.com/NFTCollections/bouquet/images/${i}.png`)
            }
            setNft(images)
            // console.log('images', nft);
        })
    }
    useEffect(() => {
        test()
    }, [])




    //     useEffect(()=>{
    //         const getComments = async ()=>{
    //             const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20`)
    //             const data = await res.json();
    //             setItems(data);

    //         }
    //         getComments();
    //     },[])

    //    console.log(items)

    //     const fetchComments = async ()=>{
    //         const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`)
    //         const data = await res.json();
    //         return data;

    //     }

    //     const fetchData = async ()=>{
    //         const commentsFormServer = await fetchComments();

    //         setItems([...items, ...commentsFormServer]);

    //         if(commentsFormServer.length === 0 || commentsFormServer.length < 20){
    //             setNoMore(false);
    //         }

    //         setPage(page+1);
    //     }
    return (
        <>

            <Header />

            <div className="gallery_section mb-5">
                <Container className='gallery_images'>
                    <Row>
                        {load ?
                            <div className='gallery_loader'>
                                <div className='circular_outerDiv'>
                                    <div className='circularDiv'>
                                    </div>
                                    <div className='circularDiv1'>
                                    </div>
                                    <div className='circular_innerDiv'>
                                        <p className='gallery_loadingText'>Loading</p>
                                    </div>
                                </div>
                            </div>
                            :
                            nft.map((e, i) => {
                                // console.log(e)
                                return (
                                    <Col lg={3} className="my-2" key={i}>
                                        <div className="gallery_div">
                                            <div className="gallery_img">
                                                <a href="https://testnets.opensea.io/collection/info-v4" target={'_blank'}>
                                                    <img src={e} alt="img" className='gallery_nft_img' style={{ width: "200px", borderRadius: "10px", display: "block", margin: "0 auto" }} />
                                                </a>
                                            </div>
                                            <div className="gallery_text">
                                                <div className="nft_name ms-5 p-3">BOUQUET #{i + 1}</div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>

                {/* <InfiniteScroll
                    dataLength={items.length}
                    next={fetchData}
                    hasMore={noMore}
                    loader={<GalleryLoader/>}
                    endMessage={
                        <p>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <Container>
                        <Row className='m-2'>
                        {items.map((item=>{
                        return(
                            <div></div>
                            <GalleryNft key={item.id} item={item} />
                        )
                    }))}
                        </Row>
                    </Container>
                </InfiniteScroll> */}

            </div>
            <Footer />
        </>
    )
}

export default Gallery;