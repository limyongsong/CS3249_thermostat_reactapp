import React from 'react';

import NotCheckedtoTestTemp from './NotCheckedtoTestTemp'
import {determineChange} from './../model/Currenttext.Model'

import './slidertext-view.css'

class SlidertextView extends React.Component{

	constructor(props) {
		super(props);
        this.sliderTextElement = React.createRef();
	  	this.state = { 
	  		sliderText: 72, /* default slider temp is 72*/
	  	};
	}
    //custom event, not sure how do slider so custom event is just like this
    updateState(e){
        if (e.key =='Enter'){
            if (e.target.value < 50) e.target.value = 50;
            if (e.target.value > 80) e.target.value = 80;
            this.setState({sliderText: e.target.value});
        }
    }
    /*change the text to be correct from using NotCheckedtoTestTemp.jsx*/
    componentDidMount(){
        this.sliderTextElement.current.changeText();
    }

    render(){
    	return (
            <div>
                <h1 className={"slidertext"}>
                {this.props.data.sliderTextP=this.state.sliderText}
                </h1>
                <p className={"notCheckComponentsS"} >
                <NotCheckedtoTestTemp ref={this.sliderTextElement} updateParent={this.updateState.bind(this)}/>
                </p>
            </div>
    	);
    }
}

export default SlidertextView;