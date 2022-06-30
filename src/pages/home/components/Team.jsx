import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import MemberOne from '../../../assets/images/team_1.png'
import MemberThree from '../../../assets/images/team_3.png'
import MemberTwo from '../../../assets/images/team_2.png'
import MemberFour from '../../../assets/images/team_4.png'
import TeamSlider from './TeamSlider'
import team from '../../../assets/images/collections/team1.png'
export default function Team() {
    return (
        <>
            <div className="main_Container">
                <div className="teamContainer" id="team">
                    <Container>
                        <Row>
                            <Col lg={12} className="content_div">
                                <div className="teamContent">
                                    <h2>TEAM</h2>
                                    <p>Bouquet Collection is the brainchild of DoctorBear, founder, CEO, digital morpheus,
                                        and the lynchpin. Headquartered in the Metaverse, the crew comprises
                                        entrepreneurs, developers, content specialists, and watch connoisseurs with a wealth of
                                        experience in the NFT space.</p>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="d-none d-sm-block">
                                    <Row className="dt">
                                        <Col lg={3}>
                                            <Image className="inner_collage" src={team} alt="CryptoBear Watch Club DoctorBear" fluid />
                                            <h5><span className="team_name"> DoctorBear</span>Founder &amp; CEO</h5>
                                        </Col>
                                        <Col lg={3}>
                                            <Image className="inner_collage" src={team} alt="CryptoBear Watch Club JDcodedBear" fluid />
                                            <h5><span className="team_name"> JDcodedBear</span>Design Director</h5>
                                        </Col>
                                        <Col lg={3}>
                                            <Image className="inner_collage" src={team} alt="CryptoBear Watch Club KozhiKodaBear" fluid />
                                            <h5><span className="team_name"> KozhiKodaBear</span>Project Manager</h5>
                                        </Col>
                                        <Col lg={3}>
                                            <Image className="inner_collage" src={team} alt="CryptoBear Watch Club ShakesBear" fluid />
                                            <h5><span className="team_name"> ShakesBear</span>Content Manager</h5>
                                        </Col>
                                    </Row>
                                </div>



                                <TeamSlider />


                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
