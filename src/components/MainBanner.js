import React from 'react'
import {Carousel} from 'react-bootstrap'

export default function MainBanner(){
  return(
    <>
    <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/feet-gd9fd17cd0_1920.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>20% Season Off</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/work-boots-g9b0d1bf71_1920.jpeg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>20% Season Off</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/feet-g212f5c91e_1920.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>20% Season Off</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  )
}