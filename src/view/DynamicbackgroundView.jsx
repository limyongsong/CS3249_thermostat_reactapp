import React from 'react'

import './dynamicbackground-view.css'

class DynamicbackgroundView extends React.Component{
	constructor(props) {
		super(props);
	  	this.state = { 
	  		heating: false, /* default current temp is 72*/
	  		cooling: false,
	  	};
	}

    render(){
    	if (this.state.heating){
	    	return( /*cx, cy need to be half h and w, r shld be correct also*/
	    		<div className={"staticbackground-view"}>
					<svg className ={"heating"} height="215" width="215">
					</svg>
	    		</div>
	    	);
    	}
    	else if (this.state.cooling){
    		return( /*cx, cy need to be half h and w, r shld be correct also*/
	    		<div className={"staticbackground-view"}>
					<svg className ={"cooling"} height="215" width="215">
					</svg>
	    		</div>
	    	);
    	}
    	else{ /*else it is off*/
    		return( /*cx, cy need to be half h and w, r shld be correct also*/
	    		<div className={"staticbackground-view"}>
					<svg className ={"off"} height="215" width="215">
					</svg>
	    		</div>
	    	);
    	}
    }
}

export default DynamicbackgroundView;