import React, { Component } from 'react';
import HogTile from './HogTile';



const HogContainer =(props)=> {


  const hogTiles=props.hogData.map(hog => < HogTile key={hog.name} hogObj={hog} url={hog.name.replace(/\s/g,'_')}/>)


    return(

      <div className="ui grid container">

      {hogTiles}
      </div>
    )
  }


export default HogContainer
