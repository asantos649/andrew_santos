import React from 'react'

function Header(){
    return(
        <div className='header'>
            <img id='headerPic' src='/Andrew_Picture.jpeg'/>
            <div>
                <div className='name'>Andrew J. Santos</div>
                <div className='shortBio'>
                    Full stack web developer with experience in Ruby on Rails, JavaScript, React, and Redux projects.  
                    I spent three years as a software tester in the healthcare IT industry before deciding to become a developer.
                    I want to use my creativity and problem-solving skills to work on new and exciting projects.  
                    As an alumnus of the Notre Dame Marching Band, I now play at Tuba Christmas every year.
                </div>
                <div className='links'>
                    <div>914-980-9500</div>
                    <div>asantos@alumni.nd.edu</div>
                    <a href='https://www.linkedin.com/in/andrew-j-santos/'>LinkedIn</a>
                    <a href='https://github.com/asantos649'>Github</a>  
                </div>
            </div>
        </div>
    )
}

export default Header