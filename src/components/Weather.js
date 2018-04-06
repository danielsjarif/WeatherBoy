import React from 'react';

class Weather extends React.Component {
  render() {
    return(
      //ifelse statements and stuff dont exist in REACT. so we use the following
      //if this.props.city and this.props.country returns true then we display <p> and so on.
      <div>
        { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }
        { this.props.temperature && <p>Temperature: {this.props.temperature}</p> }
        { this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
        { this.props.visibility && <p>Visibility: {this.props.visibility}</p> }
        { this.props.description && <p>Conditions: {this.props.description}</p> }
        { this.props.error && <p>Error: {this.props.error}</p> }

      </div>
    );
  }
};

export default Weather;
