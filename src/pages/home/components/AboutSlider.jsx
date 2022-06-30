import React from 'react'
import { Carousel } from 'react-bootstrap'
import AngelBear from '../../../assets/images/1 10.jpg'
import ArmyBear from '../../../assets/images/1 12.jpg'
import SwagBear from '../../../assets/images/1 11.jpg'
import CapBear from '../../../assets/images/1 9.jpg'
import img1 from '../../../assets/images/collections/1.png'
import img11 from '../../../assets/images/collections/11.png'
import img102 from '../../../assets/images/collections/102.png'
import img103 from '../../../assets/images/collections/103.png'

export default function AboutSlider() {
  return (
    <>

      <Carousel className="d-sm-none">
        <Carousel.Item  style={{padding: "5px"}}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            style={{borderRadius : "10px"}}
          />

        </Carousel.Item>
        <Carousel.Item  style={{padding: "5px"}}>
          <img
            className="d-block w-100"
            src={img11}
            alt="Second slide"
            style={{borderRadius : "10px"}}
          />

        </Carousel.Item>
        <Carousel.Item  style={{padding: "5px"}}>
          <img
            className="d-block w-100"
            src={img103}
            alt="Third slide"
            style={{borderRadius : "10px"}}
          />
        </Carousel.Item>
        <Carousel.Item  style={{padding: "5px"}}>
          <img
            className="d-block w-100"
            src={img102}
            alt="Third slide"
            style={{borderRadius : "10px"}}
          />
        </Carousel.Item>
      </Carousel>
    </>


  )
}
