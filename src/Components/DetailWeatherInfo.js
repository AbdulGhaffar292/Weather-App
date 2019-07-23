import React from 'react';

class DetailWeatherInfo extends React.Component {

    state = {
        peressure: "",
        humidity: "",
        wind: {speed: '', deg: ''},
        sunRise: "",
        sunSet: "",
    }
    render() {
        return (
            <React.Fragment>
                <p>{this.state.peressure}</p>
                <p>{this.state.humidity}</p>
                <p>{`${this.state.wind.speed}, ${this.state.wind.deg}°C`}</p>
                <h5>{`sunSet: ${this.state.sunSet}`}</h5>
                <h5>{`sunRise: ${this.state.sunRise}`}</h5>
            </React.Fragment>

        )
    }

}

export default DetailWeatherInfo;