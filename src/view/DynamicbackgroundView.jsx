import React from 'react'

import {determineChange} from './../model/Currenttext.Model'

import './dynamicbackground-view.css'

class DynamicbackgroundView extends React.Component{
	constructor(props) {
		super(props);
	  	this.state = { 
	  		conditionD: "heating", /* default current temp is 72*/
	  	};
	}

    render(){
    	return( /*cx, cy need to be half h and w, r shld be correct also*/
			<div className={"staticbackground-view"}>
				<p className={"invisibleD"}>
				{this.state.conditionD = determineChange(this.props.data.currentTextP, this.props.data.sliderTextP)}
				</p>
				<svg className ={this.state.conditionD} height="215" width="215">
				</svg>
			</div>
		);
    }
}

export default DynamicbackgroundView;