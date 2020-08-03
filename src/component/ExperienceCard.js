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
                <div>{role}</div>
                <div>{location}</div>
            </div>
            <ul className='cardList'>
                {data.map((desc,idx)=>{
                    return <li key={idx} className='cardDescription'>{desc}</li>
                })}
            </ul>
            
        </div>
    )
}

export default ExperienceCard