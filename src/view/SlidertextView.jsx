import React from 'react';

import './slidertext-view.css'


class SlidertextView extends React.Component{

	constructor(props) {
		super(props);
	  	this.state = { 
	  		sliderText: 72, /* default slider temp is 72*/
	  	};
	}

    render(){
    	return (
    		<div className={"slidertext-view"}>
    			<h1>
    			{this.state.sliderText}
    			</h1>
    		</div>
    	);
    }
}

export default SlidertextView;