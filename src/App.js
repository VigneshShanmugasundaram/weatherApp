import React, { Component } from 'react';
import './App.css';


class App extends Component {

constructor(props){
  super(props)
  this.state = { 
    search:"",
    weather:{
      name : "",
      id : " ",
      main : {
        temp : "",
        temp_min : " ",
        temp_max : " "
      },
      weather : 
      [{ 
        description : " ",
        icon : " "
      }]
    },
    isLoading:false,
  }
}
setSearchData=(event)=> { 
  console.log("event", event.target.value);
    this.setState({search:event.target.value}); 
}
search=()=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+this.state.search+"&APPID=1d2fe1713128730b24c837669f9dfcc5")
      .then(res => res.json())
      .then(json => {
        console.log("response data", json)
        this.setState({weather:json,isLoading:true});
      })


  }
  render() {
    var {isLoading,weather}=this.state;
    // if(!isLoading){
    //   return(
    //     <div>
    //       <p>Loading Please Wait</p>
    //     </div>
    //   )
    // }
    // else{

    return (
      <div className="App">
      
        <table className="Header">
          <tbody>
            <tr>
              <td><img src="./logo.png" alt="logo" width="50px"/></td>
              <td>Weather App</td>
            </tr>
          </tbody>
          </table>      
        <input type="text" className="searchbox" value={this.state.search}  onChange={(event)=>this.setSearchData(event)}/>
        <button onClick = {(event)=>this.search(event)} >Search</button>
        
        <table className="Output">
          <thead>
              <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Main</th>
              <th>Description</th>
              <th>Icon</th>
              <th>Min Temp</th>
              <th>Max Temp</th>

              </tr>
          </thead>
          <tbody>
            <tr>
            
              <th>{this.state.weather.name}</th> 
              <th>{this.state.weather.id}</th>
              <th>{this.state.weather.main.temp}</th>
              <th>{this.state.weather.weather[0].description}</th>
              <th>{this.state.weather.weather[0].icon}</th>
              <th>{this.state.weather.main.temp_min}</th>
              <th>{this.state.weather.main.temp_max}</th>
              
            </tr>
          </tbody>
        </table>

      
              </div>
    );}
  
// }
}

export default App;
