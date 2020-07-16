import React from 'react'

function ProjectCard(props){
    const {projectName, githubLink, videoLink, description, collaboration,  data} = props.project
    return (
        <div className='experienceCard'>
            <div className='expRow'>
                <div className='companyTitle'>{projectName}</div>
            </div>
            <div className='expRow'>
                <a href={githubLink}>Link to Code</a>
            </div>
            <div className='demoWrapper'>
                <iframe 
                    className='demoVideo'
                    src={videoLink}
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                />
            </div>
            <ul className='expList'>
                {data.map(desc=>{
                    return <li className='expDescription'>{desc}</li>
                })}
            </ul>
            
        </div>
    )
}

export default ProjectCard