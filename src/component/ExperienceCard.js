import React from 'react'

function ExperienceCard(props){
    const {company, location, dates, role, data} = props.experience
    return (
        <div className='card'>
            <div className='cardRow'>
                <div className='cardTitle'>{company}</div>
                <div>{dates}</div>
            </div>
            <div className='cardRow'>
                <div>{location}</div>
                <div>{role}</div>
            </div>
            <ul className='cardList'>
                {data.map(desc=>{
                    return <li className='cardDescription'>{desc}</li>
                })}
            </ul>
            
        </div>
    )
}

export default ExperienceCard