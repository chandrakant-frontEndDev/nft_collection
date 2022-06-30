import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
export default function NFT() {
    return (
        <>
            <div className="main_Container">
                <div className="specsContainer">
                    <Container>
                        <Row className="whoel">
                            <Col lg={12}>
                                <div className="specsContentArea">
                                    <h2 className="h2_one">WHO ELSE HAS</h2>
                                    <h2 className="h2_two">YOUR NFT?</h2>
                                    <p>No one. Not a single creature to have walked this planet (or crawled). Time may have been created equal. But not Bouquet NFTs. Each NFT is uniquely hand-drawn and programmatically generated. We've created 327 unique traits – including character, bouquet, color, function and more facets, to ensure that each piece is a distinct work of art.</p>
                                    <p>The supply of each NFT varies. There's also a selection of Super Rares. Will you be one of the lucky owners? Only time will tell.</p>
                                    <p>All Bouquet collections are stored as ERC-721 tokens on the Ethereum Blockchain and hosted on IPFS (see record & proof). To access members-only areas, Bouquet collection holders must sign into their Metamask Wallet.</p>

                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
