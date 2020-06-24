import React, {useEffect} from 'react';
import ItineraryTable from "../SharedComponents/itinerary-table/itinerary-table.component";
import { Content } from './package.styles'
import OurServicesCard from '../our-services-card/our-services-card.component';
import PackageDetails from '../package-details/package-details.component';
import Button from '../SharedComponents/button/button.component';



const Package = ({packageDetails, ...otherProps}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (

        <Content>
          <PackageDetails image={packageDetails.image} title={packageDetails.title} 
          description={packageDetails.description} subtitle={packageDetails.subtitle}  />
          <h2>Nossos serviços</h2>
          <OurServicesCard {...otherProps}  />
          <h2>Programação</h2>
          <ItineraryTable {...otherProps} />
          <Button text='Entre em contato' />
        </Content>
      );} 

export default Package;