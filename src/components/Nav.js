import piggy from '../porco.png'
import React,{Component} from 'react'

class Nav extends Component {




render(){
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>




				<select onChange={(event)=>this.props.handleSort(event)}>
				<option value="default">Sort By</option>
				<option value="name">name</option>
				<option value="weight">weight</option>
				</select>

				<select onChange={(event)=>this.props.handleFilter(event)}>
				<option value='default'>Filter By</option>
				<option value='greased'>Greasy AF</option>
				<option value='notGreased'>Nah no grease</option>
				</select>


		</div>
	)
}
}

export default Nav
