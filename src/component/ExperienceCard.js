import React from 'react'

function ExperienceCard(props){
    const {company, location, dates, role, data} = props.experience
    return (
        <div className='experienceCard'>
            <div>{company}</div>
            <div>{location}</div>
            <div>{dates}</div>
            <div>{role}</div>
            
        </div>
    )
}

export default ExperienceCard