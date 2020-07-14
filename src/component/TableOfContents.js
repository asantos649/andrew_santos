import React from 'react'

function TableOfContents(props){

    return(
        <span className='tableOfContents'>
           <span className='navLink' id={props.page === 1 && 'selectedPage'}onClick={()=>props.handlePage(1)}>Welcome</span>
           <span className='navLink' id={props.page === 2 && 'selectedPage'}onClick={()=>props.handlePage(2)}>Projects</span>
           <span className='navLink' id={props.page === 3 && 'selectedPage'}onClick={()=>props.handlePage(3)}>Experience</span>
           <span className='navLink' id={props.page === 4 && 'selectedPage'}onClick={()=>props.handlePage(4)}>Bio</span>
        </span>
    )
}

export default TableOfContents