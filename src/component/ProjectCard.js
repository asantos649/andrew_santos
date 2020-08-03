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
                {collaboration.name !== '' && <div>In collaboration with: <a href={collaboration.link}>{collaboration.name}</a></div>}
            </div>
            <div className='demoWrapper'>
                <iframe 
                    className='demoVideo'
                    src={videoLink}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
            </div>
            <ul className='cardList'>
                {data.map((desc,idx)=>{
                    return <li key={idx} className='cardDescription'>{desc}</li>
                })}
            </ul>
            
        </div>
    )
}

export default ProjectCard