import React from 'react'
import {useParams} from 'react-router-dom'

export default function ProjectDetails() {
    let id = useParams()['id'];
  return (
    <div className='container section project-details'>

        <div className='card z-depth-0'>
            <div className='card-conent'>
<span className='card-title'>Project Title- {id}</span>
<p>ESSA duis occaecat elit laborum culpa ea voluptate.</p>
            </div>
            <div className='card-action gret lighten-4 grey-text'>
                <div> posted by Brave Cake</div>
                <div>Date:</div>
            </div>
        </div>
    </div>
  )
}
   