import React from 'react';
import {Itinerary} from './itinerary-table.styles'

const ItineraryTable = ({title, itineraryTables}) =>
     (
      <div className="itinerary-table">
        {title ? <h1>{title}</h1> : null}
        { itineraryTables.map(itinerary => (
          <I class='table'>
            <label>{itinerary.day}</label>
            <label>{itinerary.city}</label>
            <p>{itinerary.description}</p>
          </I>
        )) }
      </div>
    );

export default ItineraryTable;