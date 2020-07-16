import React from 'react'
import Links from '../component/Links'
import Bio from '../component/Bio'
import Projects from '../component/Projects'
import Experience from '../component/Experience'

function MainContainer(props){
    
    const renderContent = () => {
        switch(props.page){
            case 1:
                return <Projects />
            case 2:
                return <Experience />
            case 3:
                return <Bio />
            case 4:
                return <Links />
        }
    }

    return(
        <div className='mainContainer'>
            <div className='moveButton' onClick={()=>props.handlePage('-')}>
                <span>{'<'}</span>
                <span>{'<'}</span>
                <span>{'<'}</span>
            </div>
            {renderContent()}
            <div className='moveButton' onClick={()=>props.handlePage('+')}>
                <span>{'>'}</span>
                <span>{'>'}</span>
                <span>{'>'}</span>
            </div>
        </div>
    )
}

export default MainContainer