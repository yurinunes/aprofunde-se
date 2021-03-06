import React, {Component} from 'react';
import CentralizedSection from "../../components/shared-components/centrilized-section/centrilized-section.component";
import { aboutUs } from "./about.data";
import { Content } from "./about.styles";


class About extends Component {
  render() {
    return (
      <Content>
        <div className='title'>
          <CentralizedSection title={aboutUs.title} mainText={aboutUs.mainText}/>
        </div>
        <CentralizedSection mainText={aboutUs.mainTextTwo}/>
      </Content>
    );
  }
}

export default About;
