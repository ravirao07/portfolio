import React from 'react'
import './Style/Navbar.css'

const Navigation = () => {
    return (
        <div>
            <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
                <div className="left nav_items">Portfolio</div>
                <div className="right ">
                    <a href="#home" className="nav_items">Home</a>
                    <a href="#about" className="nav_items">About</a>
                    <a href="#skill" className="nav_items">Skill</a>
                    <a href="#projects" className="nav_items">Projects</a>
                    <a href="#exprience" className="nav_items">Exprience</a>
                    <a href="#contact" className="nav_items">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navigation