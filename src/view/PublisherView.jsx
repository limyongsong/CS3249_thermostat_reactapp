import React from 'react';

import StaticbackgroundView from './StaticbackgroundView'
import DynamicbackgroundView from './DynamicbackgroundView'
import LogoView from './LogoView'
import CurrenttextView from './CurrenttextView'
import SlidertextView from './SlidertextView'

import './publisher-view.css'


class PublisherView extends React.Component{

    render(){

    	return (
    		<div className={"publisher-view"}>
    			<StaticbackgroundView />
                <DynamicbackgroundView />
    			<LogoView />
    			<CurrenttextView />
    			<SlidertextView />
    		</div>
    	);
    }
}

export default PublisherView;