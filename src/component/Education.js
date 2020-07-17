import React from 'react'
import EducationCard from './EducationCard'

const educationHash = [
    {
        school: 'Flatiron School',
        location: 'NYC, NY',
        degree: 'Software Engineering Immersive Program',
        dates: 'July 2019 - October 2019',
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
    return educationHash.map((edu)=>{
         return <EducationCard education={edu}/>
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