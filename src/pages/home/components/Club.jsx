import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import KingBear from '../../../assets/images/w-1.png'
import BearPaw from '../../../assets/images/w-2.png'
import Frame from '../../../assets/images/w-3.png'
import Jar from '../../../assets/images/w-4.png'
import Honey from '../../../assets/images/w-5.png'
import ClubSlider from './ClubSlider'
import icon1 from "../../../assets/images/collections/Icon 0-02.png"
import icon2 from "../../../assets/images/collections/Icon 02-01.png"
import icon3 from "../../../assets/images/collections/Icon 03-03.png"
export default function Club() {
    return (
        <>
            <div className="clubContainer">
                <Container className="py-4">

                    <Row className="py-4">
                        <Col lg={5}>
                            <div className="specsContentArea pp">

                                <h2 className="h2_one">WELCOME</h2>
                                <h2 className="h2_two">TO THE CLUB</h2>


                            </div>
                        </Col>
                    </Row>

                    <Row className="d-none d-sm-block" style={{ justifyContent: "space-between", marginBottom: "40px" }}>
                        <Col lg={2}>
                            <div className="club_inner">
                                <Image className="inner_collage" src={icon1} alt="10,000 rare"
                                    style={{ width: "170px" }} fluid />
                                <div><p>10,000 rare NFT</p></div>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="club_inner">
                                <Image className="inner_collage" src={icon2} alt=""
                                    style={{ width: "170px" }} fluid />
                                <p>Linear distribution: All  cost 3 ETH</p>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="club_inner">
                                <Image className="inner_collage" src={icon3} alt=" Full ownership"
                                    style={{ width: "170px" }} fluid />
                                <p>Full ownership rights to your NFT asset</p>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="club_inner">
                                <Image className="inner_collage" src={Jar} alt=" Members-only"
                                    style={{ width: "170px" }} fluid />
                                <p>The Cave: Members-only ‘scratch & carves’ wall</p>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="club_inner">
                                <Image className="inner_collage" src={Honey} alt="CryptoBear Watch Club Exclusive airdrops"
                                    style={{ width: "170px" }} fluid />
                                <p>Exclusive airdrops throughout your journey</p>
                            </div>
                        </Col>
                    </Row>


                    <ClubSlider />


                </Container>
            </div>
        </>
    )
}
