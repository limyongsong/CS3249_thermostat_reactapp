import React from 'react';

import NotCheckedtoTestTemp from './NotCheckedtoTestTemp'

import './currenttext-view.css'


class CurrenttextView extends React.Component{

	constructor(props) {
		super(props);
	  	this.state = { 
	  		currentText: 72, /* default current temp is 72*/
	  	};
	}

    updateState(e){
        this.setState({currentText: e.target.value});
    }

    render(){
    	return (
    		<div className={"currenttext-view"}>
    			<h1 >
    			Current: {this.state.currentText}
    			</h1>
                <p className={"notCheckComponents"} >
                <NotCheckedtoTestTemp updateParent={this.updateState.bind(this)}/>
                </p>
    		</div>
    	);
    }
}

export default CurrenttextView;