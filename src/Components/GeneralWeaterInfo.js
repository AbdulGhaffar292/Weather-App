import React from 'react';

class GeneralWeatherInfo extends React.Component{

    // state = {
    //     cityName: "",
    //     countryCode: "",
    //     date: "",
    //     icon: "",
    //     temprature: "",
    //     }
    render(){
        return(
            <React.Fragment>
                {/* <h1>{`${this.state.cityName}, ${this.state.countryCode}`}</h1>
                <p>{this.state.date}</p>
                <h3>{this.state.temprature}</h3> */}

        {this.props.city && this.props.country &&  <p> Location: {this.props.city} ,{this.props.country}</p>}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}        
        
        {this.props.error && <p>{this.props.error}</p>}
            </React.Fragment>

        )
    }

}

export default GeneralWeatherInfo;