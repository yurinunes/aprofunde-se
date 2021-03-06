import React from 'react';
import { v4 as uuid } from 'uuid';
import {Itinerary, Content} from './itinerary-table.styles'

const ItineraryTable = ({itineraryTables}) =>
     (
      <Content>
        { itineraryTables.map(itinerary => (
          <Itinerary key={uuid()}>
            <label>{itinerary.day}</label>
            <label>{itinerary.city}</label>
            <p>{itinerary.description}</p>
          </Itinerary>
        )) }
      </Content>
    );

export default ItineraryTable;
