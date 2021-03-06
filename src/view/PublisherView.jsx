import React from 'react';

import {Machine} from 'xstate';

import StaticbackgroundView from './StaticbackgroundView'
import DynamicbackgroundView from './DynamicbackgroundView'
import LogoView from './LogoView'
import CurrenttextView from './CurrenttextView'
import SlidertextView from './SlidertextView'

import './publisher-view.css'

/* XState not used (feels too convoluted)
const stateMachine = Machine({
	initial:' idle',
	states: { 
		idle: {
			on: {
				SUBMIT: [
					{
						target: 'loading',
						//check if the input for textbox can be converted to numbers
						cond: (ctx, event) => !isNaN(event.data.currentTextP) && !isNaN(event.data.sliderTextP)
					},
					{
						target: 'error'
					}
				]
			},
		},
		loading: {
			on: {
				CONDITION_COOL: 'cooling',
				CONDITION_HEAT: 'heating',
				CONDITION_OFF: 'off',
			},
		},
		cooling: {
			on: {
				SUBMIT: 'loading',
			},
		},
		heating: {
			SUBMIT: 'loading',
		},
		off: {
			SUBMIT: 'loading',
		},
	}
});
*/

class PublisherView extends React.Component{
      constructor(props) {
        super(props);
        this.state = { /* so the children can share the states*/
            currentTextP: 72, //will be changed in the View immediately
            sliderTextP: 72, //default is 72
            intermediateC: 72,
            intermediateS: 72,
        };

      }
    /* check if states changed or not and retify all inconsistency*/
    /*also resolves the need for both slider and currenttext view to have duplicate code*/
    /*duplicated code can just be in currenttextview and removed from sliderview*/
    componentDidMount(){
        this.interval = setInterval(()=>
            {   
                if (this.state.intermediateS != this.state.sliderTextP || this.state.intermediateC != this.state.currentTextP){
                    this.setState({intermediateC: this.state.currentTextP});
                    this.setState({intermediateS: this.state.sliderTextP});
                }
            }
        );
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render(){

    	return (
    		<div className={"publisher-view"}>
    			<StaticbackgroundView />
                <DynamicbackgroundView data={this.state} />
    			<LogoView />
    			<CurrenttextView data={this.state}/>
    			<SlidertextView data={this.state}/>
    		</div>
    	);
    }
}

export default PublisherView;