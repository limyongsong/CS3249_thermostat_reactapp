import React from 'react';

import './notCheckedtoTestTemp-view.css'

class NotCheckedtoTestTemp extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            textFiller: "Current",
        };
    }

    changeText=()=>{
        this.setState({textFiller: "RadialSlider"});
    }

    render(){
    	return (
            <div>
                <h1>
                Set {this.state.textFiller} Temperature &nbsp;
                    <input
                        type="text"
                        value={this.props.currentText}
                        onChange={this.props.updateParent}
                        style={{ width: "20px" }}/>

                </h1>
            </div>
    	);
    }
}

export default NotCheckedtoTestTemp;