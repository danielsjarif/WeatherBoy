//React practice. Will have a shit ton of comments for myself to read.

import React from 'react';
//All files, we have to import react from react
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '5186fa6ba646f8bce3bfc68de51c2804';

//React.component lives somewhere in node_modules
class App extends React.Component {
  state = {
    //initial state of the object
    //will change when button is pressed.
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    visibility: undefined,
    description: undefined,
    error: undefined
  }
  //before you declare the function, put in async
  // for api/web request calls
  get_weather = async (e) => {
    //The following argument prevents usual 'default' behavior, preventing full-page refresh.
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    //We must make sure that when the user doesn't enter any data,
    //The whole thing doesn't break by showing the user a warning.
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        visibility: data.visibility,
        description: data.weather[0].description,
        //since weather contains an array
        error: ''
      });
    } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          visibility: undefined,
          description: undefined,
          //since weather contains an array
          error: 'Please enter the values!!!'
        });
    }
  }
  //render method returns JSX which babel transpiles in the background
  render() {
    return (
      <div>
        <Titles/>
        <Form get_weather = {this.get_weather}/>
        <Weather
           temperature = {this.state.temperature}
           city = {this.state.city}
           country = {this.state.country}
           humidity = {this.state.humidity}
           visibility = {this.state.visibility}
           description = {this.state.description}
           error = {this.state.error}
         />
      </div>
    );
  }
};

export default App;
