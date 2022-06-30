import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import BulletOne from '../../../assets/images/1-.png'
import BulletTwo from '../../../assets/images/2-.png'
import BulletThree from '../../../assets/images/3-.png'
import BulletFour from '../../../assets/images/4-.png'
import BulletFive from '../../../assets/images/5-.png'
import RoadMapBear from '../../../assets/images/Roadmap-Bear.png'
import nft from '../../../assets/images/collections/nft.gif'
export default function RoadMap() {
    return (
        <>
            <div className="main_Container">
                <div className="roadMapContainer" id="roadmap">
                    <Container className="py-4 pb-0">
                        <Row>
                            <Col lg={5} style={{ display: "flex" }}>
                                <div className="roadMapFirst" style={{ position: "relative" }}>
                                    <h2 className="h2_one">ROADMAP</h2>
                                    <h2 className="h2_two">ACTIVATIONS</h2>
                                    <p>Strap yourselves in for a journey beyond the realms of time. We’ve set up a few
                                        checkpoints
                                        for Bouquet to attain immortality. Once we hit a target through percentage, our
                                        project
                                        will move up several notches.</p>

                                    <Image src={nft} className="mob-hide" style={{ width: "94%", position: "absolute", bottom: "40px", borderRadius:"10px" }} alt="CryptoBear Watch Club activation roadmap" />
                                </div>
                            </Col>

                            <Col lg={7} className="dashed-wrapp">
                                <div className="dashed">
                                    <div className="roadmap-phase-contentDiv bullet-wrapp">
                                        <Image src={BulletOne} className="bullet" alt="CryptoBear Watch Club Launch" />
                                        <h5>0% | GRAND LAUNCH</h5>
                                        <p>The private discord channel goes live exclusively for Bouquet Collection members.
                                            Members
                                            gain access to the collection as well as global watch influencers and traders.</p>
                                    </div>
                                    <div className="roadmap-phase-contentDiv bullet-wrapp">
                                        <Image src={BulletTwo} className="bullet" alt="CryptoBear Watch Club prize" />
                                        <h5>20% | RAFFLE PRIZES</h5>
                                        <p>The first 1,000 mints are awarded limited-edition Bouquet  airdrops which qualifies them for a raffle to win a win a limited-edition watch worth USD 60,000. <br />The 1001 to 5000th mints also qualify for a raffle to win a limited-edition watch worth USD 60,000.<br />Upon minting the entire collection, a third limited-edition watch worth USD 60,000 will be up for grabs via the raffle.<br />The watches will be shipped to winners wherever they may be!</p>
                                    </div>
                                    <div className="roadmap-phase-contentDiv bullet-wrapp">
                                        <Image src={BulletThree} className="bullet" alt="CryptoBear Watch Club CBWC token" />
                                        <h5>60% | CBWC TOKEN</h5>
                                        <p>We're halfway there! At this point, a Bouquet token dedicated to collecting luxury NFTs is launched. The token can be used to purchase new collections as well as real watches from the club.</p>
                                    </div>
                                    <div className="roadmap-phase-contentDiv bullet-wrapp">
                                        <Image src={BulletFour} className="bullet" alt="CryptoBear Watch Club meta verse" />
                                        <h5>80% | ENTER THE METAVERSE</h5>
                                        <p>Bouquet Collection is officially launched in the Metaverse through partnerships with
                                            Sandbox and Decentraland. We will feature galleries to display your NFTs as well as games to play and earn Bouquet Collection tokens.</p>
                                    </div>
                                    <div className="roadmap-phase-contentDiv bullet-wrapp">
                                        <Image src={BulletFive} className="bullet" alt="CryptoBear Watch Club Next Saga" />
                                        <span style={{ width: "50px", height: "calc(100% - 58px)", position: "absolute", left: "-90px", bottom: "0" }}></span>
                                        <h5>100% | THE NEXT SAGA</h5>
                                        <p style={{margin: "0"}}>Members who hold their NFTs will be awarded rare airdrops as well as limited-edition
                                            bouquets,
                                            not only in the Metaverse, but also for real! We are aiming to partner with major brands
                                            to
                                            grant members exclusive rights to new releases and events in the Bouquet world.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
