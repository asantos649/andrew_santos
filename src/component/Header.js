import React from 'react'

function Header(){
    return(
        <div className='header'>
            <img id='headerPic' src='andrew_picture.png' style={{width:'170px', height:'170px'}} alt='Andrew J. Santos, React Developer'/>
            <div>
                <div className='name'>Andrew J. Santos</div>
                <div className='shortBio'>
                    Full stack web developer with experience in Ruby on Rails, JavaScript, React, and Redux projects.  
                    I spent three years as a software tester in the healthcare industry before making a career change and becoming a developer.
                    I want to use my creativity and problem-solving skills to work on new and exciting projects.  
                </div>
                <div className='links'>
                    <div>914-980-9500</div>
                    <a href='mailto:asantos@alumni.nd.edu'>asantos@alumni.nd.edu</a>
                    <a href='https://www.linkedin.com/in/andrew-j-santos/'>LinkedIn</a>
                    <a href='https://github.com/asantos649'>Github</a>  
                </div>
            </div>
        </div>
    )
}

export default Header