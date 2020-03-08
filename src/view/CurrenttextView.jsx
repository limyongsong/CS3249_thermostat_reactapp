import React from 'react';

import './currenttext-view.css'


class CurrenttextView extends React.Component{

	constructor(props) {
		super(props);
	  	this.state = { 
	  		currentText: 72, /* default current temp is 72*/
	  	};
	}

    render(){
    	return (
    		<div className={"currenttext-view"}>
    			<h1>
    			Current: {this.state.currentText}
    			</h1>
    		</div>
    	);
    }
}

export default CurrenttextView;