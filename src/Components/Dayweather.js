import React from "react";

class Dayweather extends React.Component{
render(){
return(
    <div>
        {this.props.city && this.props.country &&  <p> Location: {this.props.city} ,{this.props.country}</p>}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}        
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}        
       {this.props.description && <p>Condition: {this.props.description}</p>}
        {this.props.error && <p>{this.props.error}</p>}
        
    </div>
);
}
};

export default Dayweather;