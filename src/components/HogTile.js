import React, {Component} from 'react';



export default class HogTile extends Component {

    state={
      urlName:this.props.hogObj.name.replace(/\s/g,'_'),
      details: false
      }

      handleClick=(event)=>{
        if (this.state.details===false){
          this.setState({details:true})
        }else{
          this.setState({details:false})
        }
      }

      addDetails=()=>{
        return (<div>
          <p>Specialty: {this.props.hogObj.specialty}</p>
          <p>{this.props.hogObj.greased ? "Greasy AF" : "Nah no grease"}</p>
          <p>Weight: {this.props.hogObj['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
          <p>Highest Medal Achieved: {this.props.hogObj['highest medal achieved']}</p>
          </div>)
      }


  render(){
    return(
      <div className="ui eight wide column pigTile">

    <h1>{this.props.hogObj.name}</h1>
    <img onClick={this.handleClick}
    src= {`http://localhost:3000/hog-imgs/${this.state.urlName}.jpg`} />
    {this.state.details ? this.addDetails() : console.log(this.state.details)}
      </div>
        // HANDLE THIS CONSOLE.LOG WHEN DONE
    )

  }
}
