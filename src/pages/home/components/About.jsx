import React from 'react'

import { Container, Row, Col, Image } from 'react-bootstrap'
import AngelBear from '../../../assets/images/1 10.jpg'
import ArmyBear from '../../../assets/images/1 12.jpg'
import SwagBear from '../../../assets/images/1 11.jpg'
import CapBear from '../../../assets/images/1 9.jpg'
import AboutSlider from './AboutSlider'
// import Swiper JS
// import Swiper from 'swiper';
// import Swiper styles
// import 'swiper/css';
import img1 from '../../../assets/images/collections/1.png'
import img11 from '../../../assets/images/collections/11.png'
import img102 from '../../../assets/images/collections/102.png'
import img103 from '../../../assets/images/collections/103.png'


export default function About() {
    return (
        <>
            <div className="main_Container">
                <div className="home_about">
                    <Container>
                        <Row className="w-cont" style={{ justifyContent: "space-between" }}>
                            <Col lg={5}>
                                <div className="home_about_content">
                                    <h1 className="h2_one">WELCOME TO
                                        <span className="h2_two">BOUQUET COLLECTION</span></h1>

                                    <p>Bouquet collection is a collection of 10,000 exclusive NFT collectibles that will live
                                        on the Ethereum Blockchain. The traits are programmatically assigned but manually drawn
                                        giving each artwork a distinct identity and lending added value to the Bouquet Collection
                                         community.</p>
                                    <p>Your Bouquet collection doubles as your collection membership, unlocks exclusive perks, and grants
                                        you preferential access to events that celebrate the spirited nature of our community.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="home_about_image">
                                    <div className="teamCollage d-none d-sm-block aboutCollage">
                                        <div className="firstRow">
                                            <Image className="inner_collage about_img" src={img1} alt="CryptoBear Watch Club" fluid />
                                            <Image className="inner_collage about_img" src={img11} alt="CryptoBear Watch Club" fluid />
                                        </div>
                                        <div className="SecondRow">
                                            <Image className="inner_collage about_img" src={img103} alt="CryptoBear Watch Club" fluid />
                                            <Image className="inner_collage about_img" src={img102} alt="CryptoBear Watch Club" fluid />
                                        </div>
                                    </div>


                                    <AboutSlider />



                                </div>
                            </Col>

                        </Row>
                    </Container>

                </div>

                {/* <!-- </div> --> */}
            </div>
        </>
    )
}
