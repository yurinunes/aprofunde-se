import React from 'react';
import {Carousel} from "react-bootstrap";

import {Content} from "./CarouselWithArrowsStyled";
import {dayTours} from "../../../pages/Home/home.data";
import { colors } from '../../../_variables';

const CarouselWithArrows = () => {
    return (
      <Content>
        <Carousel>
          {dayTours.carousel.map(({carouselTitle,carouselSubtitle,carouselImage}, i) =>
              <Carousel.Item key={i}>
                <div style={{ color: colors.aprofundeSeOrange }} className='flex align-items-center'>
                 <div className='header'>
                    <h5>{carouselTitle}</h5>
                    <small>{carouselSubtitle}</small>
                 </div>
                  <img
                    className="carousel-img"
                    src={carouselImage}
                    alt=""
                  />
                </div>
            </Carousel.Item>

          )
          }
        </Carousel>
      </Content>
    );
}

export default CarouselWithArrows;
