import React from 'react';

import {Container, ImageExtended, Overlay} from './custom-card-with-background.styles'
import {Link} from 'react-router-dom';

import Button from '../SharedComponents/button/button.component';

const CustomCardWithBackground = ({hideOverlay, backgroundImage, description, route, buttonBackgroungColor}) => (
  <Container>
    <ImageExtended bg={backgroundImage} >
      <div contentPadding={contentPadding}>
        <h5>{description}</h5>
        <Link to={route}>
        <Button bgColor={buttonBackgroungColor} text='Saiba mais' />
        </Link>
      </div>
     {!hideOverlay ? <Overlay></Overlay> : null}
    </ImageExtended>
  </Container>
);

export default CustomCardWithBackground;