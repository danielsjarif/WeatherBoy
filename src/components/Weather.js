import React from 'react';

const Weather = props => (
    <div>
      { props.city && props.country && <p>Location: {props.city}, {props.country}</p> }
      { props.temperature && <p>Temperature: {props.temperature}</p> }
      { props.humidity && <p>Humidity: {props.humidity}</p> }
      { props.visibility && <p>Visibility: {props.visibility}</p> }
      { props.description && <p>Conditions: {props.description}</p> }
      { props.error && <p>Error: {props.error}</p> }
    </div>
);

//The following is a state component. We're trying to make a stateless component
//Only difference is, we define the function with const weather = ....
// class Weather extends React.Component {
//   render() {
//     return(
//       //ifelse statements and stuff dont exist in REACT. so we use the following
//       //if props.city and props.country returns true then we display <p> and so on.
//       <div>
//         { props.city && props.country && <p>Location: {props.city}, {props.country}</p> }
//         { props.temperature && <p>Temperature: {props.temperature}</p> }
//         { props.humidity && <p>Humidity: {props.humidity}</p> }
//         { props.visibility && <p>Visibility: {props.visibility}</p> }
//         { props.description && <p>Conditions: {props.description}</p> }
//         { props.error && <p>Error: {props.error}</p> }
//
//       </div>
//     );
//   }
// };

export default Weather;
