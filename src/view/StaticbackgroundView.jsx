import React from 'react'

import './staticbackground-view.css'

class StaticbackgroundView extends React.Component{

    render(){
    	return( /*cx, cy need to be half h and w, r shld be correct also*/
    		<div className={"staticbackground-view"}>
				<svg className ={"back0"} height="300" width="300">
  					<circle cx="150" cy="150" r="135" stroke="none" stroke-width="none" fill="whitesmoke" />
				</svg>
				<svg className ={"back1"} height="300" width="300">
  					<circle cx="150" cy="150" r="125" stroke="none" stroke-width="none" fill="white" />
				</svg>
				<svg className ={"shadow1"} height="250" width="250">
				</svg>
				<svg className ={"back2"} height="230" width="230">
  					<linearGradient id="back2p1" x1="0" y1="0" x2="1" y2="1" gradientTransform="rotate(10)">
  						<stop offset="0" stop-color="lightslategray"></stop>
  						<stop offset="0.5" stop-color="lightslategray"></stop>
  						<stop offset="0.501" stop-color="slategray"></stop>
  						<stop offset="1" stop-color="slategray"></stop>
  					</linearGradient>
  					<circle cx="115" cy="115" r="108" stroke="none" stroke-width="none" fill="url(#back2p1)" />
				</svg>
				<svg className ={"back3"} height="230" width="230">
  					<circle cx="115" cy="115" r="110" stroke="dimgrey" stroke-width="5" fill="transparent" />
				</svg>
				<svg className ={"back3p1"} height="230" width="230">
					<linearGradient id="back3p1i" x1="0" y1="0" x2="1" y2="1" gradientTransform="rotate(-39)">
						<stop offset="20%" stop-color="cornflowerblue"></stop>
						<stop offset="80%" stop-color="salmon"></stop>
					</linearGradient>
					<circle cx="115" cy="115" r="110" stroke-width="5" fill="none" stroke="url(#back3p1i)"></circle>
				</svg>
    		</div>
    	);
    }
}

export default StaticbackgroundView;