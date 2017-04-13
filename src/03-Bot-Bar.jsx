import React, { Component } from 'react';
import './style.css';
import logo1 from './IMG/git3.png';
import logo2 from './IMG/pf1.png';


class BBar extends Component{
    render(){
        return(
            <div className="bottom1 Trans">
                <div className="name"> <p>by: Edmundo Rubio</p> </div>
                <div><a href="https://github.com/Edxael" target="blank"> <img className="icon" src={logo1} alt="??" /></a></div>
                <div><a href="http://www.mycode.website/" target="blank"> <img className="icon" src={logo2} alt="??" /></a></div>
            </div>
        )
    }
}

export default BBar;
