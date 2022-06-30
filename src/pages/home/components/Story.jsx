import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import StoryImg from '../../../assets/images/story-.png'

export default function Story() {
    return (
        <>
            <div className="bathroomContainer" id="story">
                <div className="main_Container">
                    <Container>
                        <Row style={{alignItems:"center", position: "relative"}}>
                            <Col lg={6} className="bcf">
                                <div className="bathroomContent">
                                    <h2 className="h2_one">STORY</h2>
                                    <h2 className="h2_two">BACK WHEN <br/> TIME WAS <br/> THE ENEMY</h2>
                                        <p>Fearless, eccentric, suave. Was he born or created? Does he belong to planet earth or the
                                            netherworld? No one knows. In fact, CryptoBear's existence hovers on the edge of
                                            reality.
                                            He's a silent observer. But every time he rages, a volcano erupts menacingly in the
                                            galaxy
                                            of Arkouda. And that's where the legend of CryptoBear originates.</p>
                                        <p>Some eons ago, a faction of nefarious apes overthrew the mighty bear coalition which
                                            ruled
                                            over Arkouda. Though subjugated, all the creatures were lying in wait for a chance to
                                            fight
                                            back. CryptoBear was still learning the ropes as a cub. But he was powerless as he
                                            watched
                                            the apes destroying anything that threatened their sovereignty. </p>
                                        <p>Flash forward into the present. The apes still rule over Arkouda. Their new mission? To
                                            infiltrate the Metaverse. Miles away, the volcano begins to roar. This can only mean one
                                            thing. CryptoBear is bracing himself for one final assault and reclaim Arkouda from
                                            the clutches of the apes. His weapon? The most potent of them all – Time.</p>
                                        <p>Time is something no mortal can turn back, or forward. Not in Arkouda or any other
                                            galaxy. CryptoBear has sworn to conquer it, master it and release it to the Metaverse.
                                            And he is not alone. Creatures with wisdom, foresight, and daring walk the path with
                                            him. This isn't the endgame. This is but the beginning. What's to come, only time will
                                            tell.</p>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="bathroomRight">
                                        <Image className="inner_collage" src={StoryImg} alt="CryptoBear Watch Club" fluid/>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </>
            )
}
