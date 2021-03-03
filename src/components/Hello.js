import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Img from "../img/udea.jpg"
import Img2 from "../img/udea2.jpg"

export default function Inicio(){
    return (
        <div>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img}
                alt="First slide"
                />
                 <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                 </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img2}
                alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
         </Carousel.Item>
    </Carousel>
    </div>
    );
}