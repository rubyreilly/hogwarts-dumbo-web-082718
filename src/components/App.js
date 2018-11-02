import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer';

import hogs from '../porkers_data';



class App extends Component {


state = {
  hogData: hogs
}

handleSort=(event)=>{
  if (event.target.value==="name"){
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

    this.setState({
      hogData: newHogsData
    })

  }if (event.target.value==="weight"){
    let newHogsData = this.state.hogData.sort(function(a, b){
      const weightA = a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      const weightB = b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']

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

  let newHogsData= this.state.hogData.filter((hog)=>{
    return hog.greased===true

  })

  this.setState({hogData: newHogsData})
} if (event.target.value==='notGreased'){
  let newHogsData = this.state.hogData.filter((hog)=>{
    return hog.greased===false
  })

  this.setState({hogData: newHogsData})
}

}



  render() {
    return (
      <div className="App">
          < Nav hogData={this.state.hogData} handleSort={this.handleSort} handleFilter={this.handleFilter}/>
          < HogContainer hogData={this.state.hogData}/>
      </div>
    )
  }
}

export default App;
