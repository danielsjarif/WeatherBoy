//React practice. Will have a shit ton of comments for myself to read.

import React from 'react';
//All files, we have to import react from react
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "5186fa6ba646f8bce3bfc68de51c2804";

//React.component lives somewhere in node_modules
class App extends React.Component {
  //before you declare the function, put in async
  // for api/web request calls
  get_weather = async (e) => {
    //The following argument prevents usual 'default' behavior, preventing full-page refresh.
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;


    const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }
  //render method returns JSX which babel transpiles in the background
  render() {
    return (
      <div>
        <Titles />
        <Form get_weather = {this.get_weather}/>
        <Weather />
      </div>
    );
  }
};

export default App;
