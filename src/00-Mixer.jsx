import React, { Component } from 'react';
import './style.css';
import TBar from './01-Top-Bar.jsx';
import CBar from './02-Cen-Bar.jsx';
import BBar from './03-Bot-Bar.jsx';

class Mixer extends Component{
    render(){
        return(
            <div className="container">

                <TBar />

                <CBar />

                <BBar />

            </div>
        )
    }
}

export default Mixer;
