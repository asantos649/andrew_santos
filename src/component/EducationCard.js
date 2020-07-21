import React from 'react'

function ExperienceCard(props){
    const {school, location, dates, degree, data} = props.education
    return (
        <div className='card'>
            <div className='cardRow'>
                <div className='cardTitle'>{school}</div>
                <div>{dates}</div>
            </div>
            <div className='cardRow'>
                <div>{degree}</div>
                <div>{location}</div>
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