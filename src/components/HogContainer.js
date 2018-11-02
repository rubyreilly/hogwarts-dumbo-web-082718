import React, { Component } from 'react';
import HogTile from './HogTile';
import hogs from '../porkers_data';




export default class HogContainer extends Component {


  state = {
    hogData: hogs

  }




  generateHogTiles = () =>{

  return this.state.hogData.map(hog => < HogTile hogObj={hog} url={hog.name.replace(/\s/g,'_')}/>)
  }

  handleSort=(event)=>{
    if (event.target.value==="name"){
      // console.log("in name sort")
      let newHogsData = this.state.hogData.sort(function(a, b){
        const nameA = a.name
        const nameB = b.name
        if (nameA < nameB){
          return -1;
        }
        if (nameA > nameB){
          return 1;
        }
        return 0;
      })
        console.log("IN SORT", newHogsData);
      this.setState({
        hogData: newHogsData
      })

    }if (event.target.value==="weight"){
      console.log("yo im in weight")
      let newHogsData = this.state.hogData.sort(function(a, b){
        const weightA = a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        const weightB = b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        console.log(weightA, weightB);
        if (weightA < weightB){
          return -1;
        }
        if (weightA > weightB){
          return 1;
        }
        return 0;
      })
      this.setState({
        hogData: newHogsData})
    }
  }

handleFilter=(event)=>{

  if (event.target.value==='greased'){
    let newHogsData = this.state.hogData.filter(function(hog){
      return hog.greased===true
    })
    this.setState({hogData: newHogsData})
  } if (event.target.value==='notGreased'){
    let newHogsData = this.state.hogData.filter(function(hog){
      return hog.greased===false
    })

    this.setState({hogData: newHogsData})
  }




}



  render(){
    console.log(this.state);
    return(

      <div className="ui grid container">

        <select className="ui eight wide column" onChange={this.handleSort}>

        <option value="default">Sort By</option>
        <option value="name">name</option>
        <option value="weight">weight</option>
        </select>

        <select className="ui eight wide column" onChange={this.handleFilter}>
        <option value='default'>Filter By</option>
        // <option value='all'>All</option>
        <option value='greased'>Greasy AF</option>
        <option value='notGreased'>Nah no grease</option>
        </select>

      {this.generateHogTiles()}
      </div>
    )
  }
}
