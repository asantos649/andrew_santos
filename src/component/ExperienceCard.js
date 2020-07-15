import React from 'react'

function ExperienceCard(props){
    const {company, location, dates, role, data} = props.experience
    return (
        <div className='experienceCard'>
            <div className='expRow'>
                <div className='companyTitle'>{company}</div>
                <div>{dates}</div>
            </div>
            <div className='expRow'>
                <div>{location}</div>
                <div>{role}</div>
            </div>
            <ul className='expList'>
                {data.map(desc=>{
                    return <li className='expDescription'>{desc}</li>
                })}
            </ul>
            
        </div>
    )
}

export default ExperienceCard