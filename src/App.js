import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import SearchAppBar from './SearchAppBar';
import Weather from './Components/Weather';
import DetailWeatherInfo from './Components/DetailWeatherInfo';
import GeneralWeatherInfo from './Components/GeneralWeaterInfo';
import Generalday from './Components/Generalday';

import Form from './Components/Form';

const API_Key = "0b68f50f49864395728c4cd3e4ce3069";
class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: "",
    status:"",
    icon: "",
    daysData: [],

        
  }

  constructor() {
    super();
    Date.prototype.addDays = function (days) {
      var dat = new Date(this.valueOf())
      dat.setDate(dat.getDate() + days);
      return dat;
    }
  }

  getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
      const formatedDate = this.getDateFormate(currentDate);
      dateArray.push(formatedDate)
      currentDate = currentDate.addDays(1);
    }
    return dateArray;
  }

  getDateFormate(date) {
    return date.getUTCFullYear() + "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
      ("0" + date.getDate()).slice(-2) + " 00:00:00";
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_Key}`);

    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      if (data.list && data.list.length > 0) {
        const weatherData = data.list.filter((weather, index) => {
          return ((index % 7) === 0 || index === 0);
        });

      this.setState({
        //temperature: data.main.temp,
        city: data.name,
        //country: data.sys.country,
        //humidity: data.main.humidity,
        //description: data.weather[0].description,
        daysData: weatherData,
        error: ""
      });
    }
    }
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        daysData: [],
        error: "Please enter the value."
      });
    }

  } 


  // searchWeather(e){
  //   console.log("In searchWeather");
  // }
  render(){
    return (
      <React.Fragment>
        <SearchAppBar />

        {/* <div className="mainSection">
         <TextField onChange={this.searchWeather}></TextField>
            <label>{this.state.searchText}</label>
          </div> */}

          <Form getWeather={this.getWeather}/>
          <div className="infoSection">
            <div className="generalWeatherInfo">
            {/* <Generalday/> */}
              <GeneralWeatherInfo
              
              />
            </div>
            <div className="detailWeatherInfo">
              <DetailWeatherInfo></DetailWeatherInfo>
            </div>
            <div className="dailyWeatherInfo">
            <Weather classNam="weather"></Weather>
              {/* <Weather></Weather> */}
              {this.state.daysData.map((item) => {
          return <Weather
            date={item.dt_txt}
            temperature={item.main.temp}
            city={this.state.city}
            country={this.state.country}
            humidity={item.main.humidity}
            description={item.weather[0].description}
            status = {item.weather[0].main}
            icon = {item.weather[0].icon}
            error={this.state.error}
          />;
        })}
            </div>
        </div>

      </React.Fragment>

    );
  }

}


export default App;
