import React from 'react';
import { Content } from "./centrilized-section.styles";

const CentralizedSection = ({textColor, title, mainText}) => 
     (
      <Content textColor={textColor}>
        <h1>{title}</h1>
        { mainText ? <p>{mainText}</p> : null }
      </Content>
    );

export default CentralizedSection;