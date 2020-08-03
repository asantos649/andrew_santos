import React from 'react'

function TableOfContents(props){

    return(
        <span className='tableOfContents'>
           <span className='navLink' id={props.page === 1 ? 'selectedPage' : null}onClick={()=>props.handlePage(1)}>Projects</span>
           <span className='navLink' id={props.page === 2 ? 'selectedPage' : null}onClick={()=>props.handlePage(2)}>Experience</span>
           <span className='navLink' id={props.page === 3 ? 'selectedPage' : null}onClick={()=>props.handlePage(3)}>Education</span>
           <span className='navLink' id={props.page === 4 ? 'selectedPage' : null}onClick={()=>props.handlePage(4)}>Bio</span>
        </span>
    )
}

export default TableOfContents