import React from 'react'

import logo from './sun.png';

import './logo-view.css'

// NOTE: React component starts with Capital letter
//We should have alot child of a parent
class LogoView extends React.Component{

    render(){

        return (
            <div className={"logo-view"}>
                <img src={logo} className="App-logo" alt="logo" width="25"/>
            </div>
        );
    }
}

export default LogoView;