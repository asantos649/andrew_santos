import React from 'react'
import ExperienceCard from './ExperienceCard'

function Experience(){

    const experienceHash = [
        {
            company: 'Flatiron School',
            location: 'NeW York, NY',
            role: 'Software Engineering Coach',
            dates: 'November 2019 - Present',
            data: [
                'Teach beginner and intermediate coding principles to students who are new to the industry',
                'Handle both technical and interpersonal issues arising in cohorts of up to 30 students',
                'Approve and restructure domain models and React component hierarchies for various student projects ',
                'Evaluate technical aptitude of students based on code challenges and personal projects',
                'Run supplemental lectures and code reviews both remotely and in-person',
                'Transitioned processes, procedures, and events to remote instruction during the COVID-19 pandemic'
            ]
        },
        {
            company: 'Epic Systems',
            location: 'Madison, WI',
            role: 'Software Tester',
            dates: 'June 2016 to July 2019',
            data: [
                    'QA Role Lead for analytics and third-party integrations functional areas',
                	'Managed multiple concurrent development projects from initial design through release ',
                	'Identified functional bugs and usability improvements to increase software quality ',
                	'Pioneered a new Quality Assurance content creation project while providing feedback and suggesting improvements ',
                	'Triaged work for team and divided testing assignments among others so that all tasks were completed on time',
                	'Created, updated, and ran through test plans for multiple application features to ensure thorough testing ',
                	'Performed iterative design review for new functionality to catch potential bugs before initial development',
                	'Organized regular and ad-hoc team-wide testing efforts that discovered and fixed new bugs',
                    'Participated in root-cause analyses for released bugs and problematic projects that yielded new processes'
                ] 
        }
        ]

    let renderExperiences = () =>{
       return experienceHash.map((exp)=>{
            return <ExperienceCard experience={exp}/>
        })
    }

    return(
        <div className='cardContainer'>
            {/* <h1>Experience</h1> */}
            {renderExperiences()}
        </div>
    )
}

export default Experience