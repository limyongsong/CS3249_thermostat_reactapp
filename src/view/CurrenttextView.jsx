import React from 'react';

import NotCheckedtoTestTemp from './NotCheckedtoTestTemp'
import {determineChange} from './../model/Currenttext.Model'

import './currenttext-view.css'


class CurrenttextView extends React.Component{

	constructor(props) {
		super(props);
	  	this.state = { 
	  		currentText: 72, /* default current temp is 72*/
            checkCondition: "off",
	  	};
	}

    updateState(e){
        if (e.key =='Enter'){
            if (e.target.value < 32) e.target.value = 32;
            if (e.target.value > 100) e.target.value = 100;
            this.setState({currentText: e.target.value});
        }
    }

    componentDidMount(){
        /*change current temp +/- 1/s till it is same as target temp*/
        this.interval = setInterval(()=>{
            if (this.state.checkCondition==="heating"){
                this.setState({currentText: (parseInt(this.state.currentText) + 1)});
            } else if (this.state.checkCondition==="cooling"){
                this.setState({currentText: (parseInt(this.state.currentText) - 1)});
            } else {
                //if "off" do nothing
            }
        },1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
    	return (
    		<div className={"currenttext-view"}>
    			<h1 >
    			Current: {this.props.data.currentTextP=this.state.currentText}
                </h1>
                <p className={"notCheckComponents"} >
                <NotCheckedtoTestTemp updateParent={this.updateState.bind(this)}/>
                </p>
                <p className={"invisible"}>
                {this.state.checkCondition = determineChange(this.props.data.currentTextP, this.props.data.sliderTextP)}
                </p>
    		</div>
    	);
    }
}

export default CurrenttextView;