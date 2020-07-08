import React from 'react'
import Welcome from '../component/Welcome'
import Bio from '../component/Bio'
import Projects from '../component/Projects'
import Experience from '../component/Experience'

function MainContainer(props){
    
    const renderContent = () => {
        switch(props.page){
            case 1:
                return <Welcome />
            case 2:
                return <Bio />
            case 3:
                return <Projects />
            case 4:
                return <Experience />
        }
    }

    return(
        <div className='mainContainer'>
            <button onClick={()=>props.handlePage('-')}>{'<'}</button>
            {renderContent()}
            <button onClick={()=>props.handlePage('+')}>{'>'}</button>
        </div>
    )
}

export default MainContainer