import React from 'react'
import { Carousel } from 'react-bootstrap'
import MemberOne from '../../../assets/images/team_1.png'
import MemberThree from '../../../assets/images/team_3.png'
import MemberTwo from '../../../assets/images/team_2.png'
import MemberFour from '../../../assets/images/team_4.png'

export default function TeamSlider() {
    return (
        <>

            <Carousel className="d-sm-none">
                <Carousel.Item style={{ padding: "5px" }}>
                    <img
                        className="d-block w-100"
                        src={MemberOne}
                        alt="First slide"
                        style={{ borderRadius: "10px" }}
                    />
                    <h5 className='teamMemberName'><span className="team_name"> DoctorBear</span>Founder &amp; CEO</h5>
                </Carousel.Item>
                <Carousel.Item style={{ padding: "5px" }}>
                    <img
                        className="d-block w-100"
                        src={MemberThree}
                        alt="Second slide"
                        style={{ borderRadius: "10px" }}
                    />
                    <h5 className='teamMemberName'><span className="team_name"> JDcodedBear</span>Design Director</h5>
                </Carousel.Item>
                <Carousel.Item style={{ padding: "5px" }}>
                    <img
                        className="d-block w-100"
                        src={MemberTwo}
                        alt="Third slide"
                        style={{ borderRadius: "10px" }}
                    />
                    <h5 className='teamMemberName'><span className="team_name"> KozhiKodaBear</span>Project Manager</h5>
                </Carousel.Item>
                <Carousel.Item style={{ padding: "5px" }}>
                    <img
                        className="d-block w-100"
                        src={MemberFour}
                        alt="Third slide"
                        style={{ borderRadius: "10px" }}
                    />
                    <h5 className='teamMemberName'><span className="team_name"> ShakesBear</span>Content Manager</h5>
                </Carousel.Item>
            </Carousel>
        </>


    )
}
