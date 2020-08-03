import React from 'react'
import EducationCard from './EducationCard'

const educationHash = [
    {
        school: 'Flatiron School',
        location: 'New York, NY',
        degree: 'Software Engineering Immersive',
        dates: 'July 2019 to October 2019',
        data: [
            
        ]
    },
    {
        school: 'University of Notre Dame',
        location: 'South Bend, IN',
        degree: 'BS in Science-Business',
        dates: 'August 2012 to May 2016',
        data: [
                
            ] 
    }
    ]

let renderEducation = () =>{
    return educationHash.map((edu, idx)=>{
         return <EducationCard key={idx} education={edu}/>
     })
 }

function Education(){
    return(
        <div className='cardContainer'>
            {/* <h1>Experience</h1> */}
            {renderEducation()}
        </div>
    )
}

export default Education