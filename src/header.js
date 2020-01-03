import React from 'react';
import './header.css';

import { gsap } from "gsap";

import ham from './pictures/ham.png'

class Header extends React.Component {

constructor (props) {

    super (props) 


    this.status = "off";

}

mobileMenu = () => {

    var ham = document.getElementById("hamburgerimg");
    var menu = document.getElementById("mobilemenu");
    var nav = document.getElementById("navbar2");

    if (this.status === "off") {

        this.status = "on";
        ham.style.transform = "rotate(-90deg)"
        gsap.to(menu, 0.9, {width: "100%", height: "100vh"})
        gsap.to(nav, 0, {display: "flex", delay: 0.9})
        gsap.to(nav, 0.5, {opacity: 1, delay: 0.9})
    }

   else if (this.status === "on") {
        gsap.killTweensOf(nav);
        this.status = "off";
        ham.style.transform = "rotate(0deg)"
        gsap.to(nav, 0, {display: "none", delay: 0})
        gsap.to(menu, 0.9, {width: "0%", height: "0vh"})
    }

}

mobileMenu2 = () => {
    
    this.mobileMenu();

}


render () {


    return (

        <div id="header">
            
            <nav id="navbar">
            <ul>
            <li ><a href="#jk">JK</a></li>
            <li className="link"><a href="#mina">Minä</a></li>
            <li className="link"><a href="#taidot">Taidot</a></li>
            <li className="link"><a href="#cv">CV</a></li>
            <li className="link"><a href="#kiinnostukset">Kiinnostukset</a></li>
            <li className="link"><a href="#yhteys">Yhteys</a></li>
            </ul>

            <div id="hamburger">
            <img onClick={this.mobileMenu} id="hamburgerimg" alt="Mobile menu" src={ham}></img>
            </div>

            </nav>

            <div id="mobilemenu">
            <div id="mobilebox1"></div>
            <div id="mobilebox2"></div>


            <nav id="navbar2">
            <ul>
            <li ><a id="mobilejk" onClick={this.mobileMenu2} href="#jk">JK<span style={{color: 'var(--color2)'}}>.</span></a></li>
            <li ><a onClick={this.mobileMenu2} href="#mina">Minä<span style={{color: 'var(--color2)'}}>.</span></a></li>
            <li ><a onClick={this.mobileMenu2} href="#taidot">Taidot<span style={{color: 'var(--color2)'}}>.</span></a></li>
            <li ><a onClick={this.mobileMenu2} href="#cv">CV<span style={{color: 'var(--color2)'}}>.</span></a></li>
            <li ><a onClick={this.mobileMenu2} href="#kiinnostukset">Kiinnostukset<span style={{color: 'var(--color2)'}}>.</span></a></li>
            <li ><a onClick={this.mobileMenu2} href="#yhteys">Yhteys<span style={{color: 'var(--color2)'}}>.</span></a></li>
            </ul>
            </nav>
            
            </div>

        </div>

    )


}


}

export default Header;
