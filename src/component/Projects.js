import React from 'react'
import ProjectCard from './ProjectCard.js'

const projects =[
    {
        projectName: 'Pub Quiz Online',
        githubLink: 'https://github.com/asantos649/pub_quiz_online',
        videoLink: 'https://www.youtube.com/embed/BeGRADJl0ek',
        description: 'Multi-player, real-time trivia game ',
        collaboration: {
                            name:'',
                            link:''
                        },
        data:[
            'Learned Socket.io to enable bi-directional, real-time, event-based communication',
            'Utilized Redux to manage state across multiple React components',
            'Designed application using media queries and custom CSS to enable a mobile user experience',
        ]
    }, 
    {
        projectName: 'CReddit',
        githubLink: 'https://github.com/TylerKnvpp/cReddit',
        videoLink: 'https://www.youtube.com/embed/mKK0Bi0X3QE',
        description: 'Mock Reddit application',
        collaboration: {
                            name:'Tyler Knapp',
                            link:'https://www.linkedin.com/in/tyler-knapp-072137b7/'
                        },
        data:[
            'Created a full Rails API to save and fetch data',
            'Serialized the back-end with Active Model Serializer to format the API',
            'Imported CSS library from Semantic-UI to stylize the user experience',
            'Implemented React to create an interactive single-page application',
        ]
    },{
        projectName: 'Clash Scouter',
        githubLink: 'https://github.com/asantos649/clash_scouter',
        videoLink: 'https://www.youtube.com/embed/5riHjZnUkNI',
        description: 'League of Legends scouting website',
        collaboration: {
                            name:'',
                            link:''
                        },
        data:[
            'Parsed the Riot Games API to obtain relevant information on specific players',
            'Designed the website from scratch using custom CSS',
            'Supplemented design with imported React components from react-tooltip, react-circular-progressbar, and react-loader-spinner',
        ]
    }
]

let renderProjects = () =>{
    return projects.map((pro, idx)=>{
         return <ProjectCard key={idx} project={pro}/>
     })
 }

function Projects(){
    return(
        <div className='cardContainer'>
            {renderProjects()}
            
        </div>
    )
}

export default Projects