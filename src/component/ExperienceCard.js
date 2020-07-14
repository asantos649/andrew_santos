import React from 'react'

function ExperienceCard(props){
    const {company, location, dates, role, data} = props.experience
    return (
        <div className='experienceCard'>
            <div className='expRow'>
                <div>{company}</div>
                <div>{dates}</div>
            </div>
            <div className='expRow'>
                <div>{location}</div>
                <div>{role}</div>
            </div>
            
        </div>
    )
}

export default ExperienceCard