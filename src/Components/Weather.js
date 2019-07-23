import React from 'react';
import '../App.css';

class Weather extends React.Component {


    // constructor(props){
    //     super(props);
    //     this.state = {
    //         day: "Today",
    //         icon: "01d",
    //         status: "cloudy", // get from base > main
    //         temprature: { temp: '12', min: '12', max: '12' },
    //     }
    //     console.log(this.props.className);
    // }
    
    render() {
        return (
            <React.Fragment>
                                
                {this.props.date && <p>Date: {this.props.date}</p>}
                {this.props.city && this.props.country && <p> Location: {this.props.city} ,{this.props.country}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}

                
                {this.props.icon && <img src ={`http://openweathermap.org/img/wn/${this.props.icon}.png`} alt = "weather icon" />}
                {this.props.status && <p>Status: {this.props.status}</p>}

                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                {this.props.description && <p>Condition: {this.props.description}</p>}
                {this.props.error && <p>{this.props.error}</p>}
                
            
            </React.Fragment>

        )
    }

}

export default Weather;