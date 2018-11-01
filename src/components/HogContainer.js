import React, { Component } from 'react';
import HogTile from './HogTile';
import hogs from '../porkers_data';




export default class HogContainer extends Component {


  state = {
    hogData: hogs

  }




  generateHogTiles = () =>{

  return this.state.hogData.map(hog => < HogTile hogObj={hog}/>)
  }

  handleChange=(event)=>{
    if (event.target.value==="name"){
      // console.log("in name sort")
      let newHogsData = this.state.hogData.sort(function(a, b){
        return a.name - b.name})
        console.log("IN SORT", newHogsData);
      this.setState({
        hogData: newHogsData
      })

    }if (event.target.value==="weight"){
      console.log("yo im in weight")
    }
  }





  render(){
    console.log(this.state);
    return(

      <div className="ui grid container">

        <select onChange={this.handleChange}>

        <option value="default">Sort By</option>
        <option value="name">name</option>
        <option value="weight">weight</option>
        </select>
      {this.generateHogTiles()}
      </div>
    )
  }
}
