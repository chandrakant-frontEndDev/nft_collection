import React from 'react'
import { Container, Row, Accordion } from 'react-bootstrap'
export default function Faq() {
    return (
        <>
            <div className="main_Container">
                <div className="faqContainer">
                    <Container>
                        <Row>
                            <div className="faqHead">
                                <h2>FAQ</h2>
                            </div>
                        </Row>
                        <Row>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is the total supply?</Accordion.Header>
                                    <Accordion.Body>
                                        10,000 unique Bouquet collectibles will be available for minting.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>When is the launch?</Accordion.Header>
                                    <Accordion.Body>
                                        The public mint starts towards the end of December 2021.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>How much does it cost to mint an NFT?</Accordion.Header>
                                    <Accordion.Body>
                                        The Dutch auction will start at 3 ETH and reduce by 0.1 ETH every 5 minutes with the floor at 0.5 ETH. The first 1,000 minters will enter a raffle draw to win a limited-edition watch worth over USD 60,000.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Where are the NFTs located?</Accordion.Header>
                                    <Accordion.Body>
                                    Bouquet Collection NFTs are housed exclusively on the Ethereum Blockchain.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Do I get full rights to my NFT?</Accordion.Header>
                                    <Accordion.Body>
                                    Bouquet Collection grants you full creative and commercial rights for the pieces you own. Utilize them as you wish and make the most of your collectibles.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
