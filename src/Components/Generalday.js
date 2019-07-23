import React from 'react';
import Form from './Form';
import Dayweather from './Dayweather';
const API_Key ="0b68f50f49864395728c4cd3e4ce3069";

class Generalday extends React.Component{
    state = {
        temperature : undefined,
        city : undefined,
        country : undefined,
        humidity : undefined,
        description : undefined,
        error : undefined,
    
          
      }

      getdayWeather = async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
       const country = e.target.elements.country.value;
        const api_days_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_Key}`);
        const days = await this.api_days_call.json();
  
        
        if(city && country)
      {
        console.log(days);
        this.setState({
        temperature: days.main.temp,
        city: days.name,
        country: days.sys.country,
        humidity: days.main.humidity,
        description: days.weather[0].description,
  
  
        error: ""
      });
      }
      else{
        this.setState({
          temperature : undefined,
      city : undefined,
      country : undefined,
      humidity : undefined,
      description : undefined,
      error : "Please enter the value."
        });
      }
      
  
      }
    render(){
    return(
        <div>
            {/* <Form getWeather = {this.getWeather} /> */}
        <Dayweather
        temperature = {this.state.temperature}
        city = {this.state.city}
        country = {this.state.country}
        humidity = {this.state.humidity}
        description = {this.state.description}
        error = {this.state.error}     
        />
        </div>
        
    );
    }
    };
    
    export default Generalday;