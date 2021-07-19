import React from 'react'
import AvatarMaker from './AvatarMaker.png';
import './about.css';
function About() {
    return (
        <div className="about">
            <div className="about__image"><img src={AvatarMaker} alt="srikanthbanoth"/></div>
            <div className="about__info">
                <h3>Banoth Srikanth</h3>
                <p id="bold">Student | Programmer | Developer</p>
                <p>Hi I'm Banoth Srikanth Student Pursuing my graduation.I'm here to share my experiances and explore new ways to learn and let others know about it</p>
            </div>
            <div className="about__links">
                <ul>
                    <li><a href="https://github.com/srikanthbanoth"><img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt="github"/></a></li>
                    <li><a href="https://banothsrikanth.herokuapp.com"><img src="https://img.icons8.com/windows/32/000000/gmail.png" alt="gmail"/></a></li>
                    <li><a href="https://www.linkedin.com/in/banoth-srikanth-742579170/"><img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png" alt="linkedin"/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default About