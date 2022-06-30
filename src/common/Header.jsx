import React, {useState} from 'react'
import { Container, Navbar, Nav, Image } from 'react-bootstrap'
import Logo1 from '../assets/images/collections/Icon 0-02.png'
import Instagram2x from '../assets/images/instagram@2x.png'
import Discord2x from '../assets/images/discord@2x.png'
import Twitter2x from '../assets/images/twiter@2x.png'
import { Link } from 'react-router-dom'

export default function Header() {
// const [metaMaskAdd, setMetaMaskAdd] = useState(null)
    // function onConnectWallet() {
    //     console.log("onClicked");
    //     window.ethereum.enable().then((userAdd) => {
    //         setMetaMaskAdd(userAdd[0])
    //     })
    // }

    // console.log("metaMaskAdd", metaMaskAdd);
    return (
        <>
            <div className="home_Nav">
                <Navbar bg="light" expand="lg">
                    <Container fluid style={{ alignItems: "center" }}>
                        <Navbar.Brand>
                            <Link to="/" className='header_logo'><Image src={Logo1} alt="Bouquet" fluid /><div>Bouquet<br></br>Collection</div></Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                            <Nav
                                className="my-2 my-lg-0"
                                style={{ maxHeight: '400px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#buy" aria-current="page">MINT A BOUQUET </Nav.Link>
                                <Nav.Link ><Link to="/gallery" className='gallery_link'>GALLERY</Link></Nav.Link>
                                <Nav.Link href="#roadmap">ROADMAP</Nav.Link>
                                <Nav.Link href="#team">TEAM</Nav.Link>
                                {/* <button className='nav-link btn btn-light connectWallet' onClick={onConnectWallet}>Connect Wallet</button> */}
                                <div className="nvico d-none d-lg-block">
                                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/cryptobearwatchclub/?utm_medium=copy_link">
                                        <img src={Instagram2x} alt="CryptoBear Watch Club instagram" />
                                    </a>

                                    <a target="_blank" rel="noreferrer" href="https://discord.gg/cryptobearwatchclub">
                                        <img src={Discord2x} alt="CryptoBear Watch Club discord" />
                                    </a>

                                    <a target="_blank" rel="noreferrer" href="https://twitter.com/CryptoBearWC">
                                        <img src={Twitter2x} alt="CryptoBear Watch Club twitter" />
                                    </a>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            {/* <div class="home_Nav">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid" style={{ alignItems: "center" }}>
                        <a class="navbar-brand" href="/">
                            <img class="img-fluid" src={Logo1} alt="CryptoBear Watch Club" />
                        </a>
                        <button id="btn-t" class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" data-toggle="collapse" data-target=".navbar-collapse" id="navbarSupportedContent" style={{ justifyContent: "flex-end" }}>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#buy">MINT A BEAR</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#story">STORY</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#roadmap">ROADMAP</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#team">TEAM</a>
                                </li>

                                <li class="nav-item nvico d-none d-lg-block">
                                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/cryptobearwatchclub/?utm_medium=copy_link">
                                        <img src={Instagram2x} alt="CryptoBear Watch Club instagram" />
                                    </a>

                                    <a target="_blank" rel="noreferrer" href="https://discord.gg/cryptobearwatchclub">
                                        <img src={Discord2x} alt="CryptoBear Watch Club discord" />
                                    </a>

                                    <a target="_blank" rel="noreferrer" href="https://twitter.com/CryptoBearWC">
                                        <img src={Twitter2x} alt="CryptoBear Watch Club twitter" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div> */}

        </>
    )
}
