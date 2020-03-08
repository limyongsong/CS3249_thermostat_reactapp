import React from 'react';

import StaticbackgroundView from './StaticbackgroundView'
import LogoView from './LogoView'
import './publisher-view.css'


class PublisherView extends React.Component{

    render(){

    	return (

    		<div className={"publisher-view"}>
    			<StaticbackgroundView />
    			<LogoView />
    		</div>
    	);
    }
}

export default PublisherView;