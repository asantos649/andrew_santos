import React from 'react'

function ProjectCard(props){
    const {projectName, githubLink, videoLink, description, collaboration,  data} = props.project
    return (
        <div className='card'>
            <div className='cardRow'>
                <div className='cardTitle'>{projectName}</div>
            </div>
            <div className='cardRow'>
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
            <ul className='cardList'>
                {data.map(desc=>{
                    return <li className='cardDescription'>{desc}</li>
                })}
            </ul>
            
        </div>
    )
}

export default ProjectCard