import React from 'react'
import Welcome from '../component/Welcome'
import Bio from '../component/Bio'
import Projects from '../component/Projects'
import Experience from '../component/Experience'

function MainContainer(props){
    
    const renderContent = () => {
        switch(props.page){
            case 'welcome':
                return <Welcome />
            case 'bio':
                return <Bio />
            case 'projects':
                return <Projects />
            case 'experience':
                return <Experience />
        }
    }

    return(
        <>
            <button>{'<'}</button>
            {renderContent()}
            <button>{'>'}</button>
        </>
    )
}

export default MainContainer