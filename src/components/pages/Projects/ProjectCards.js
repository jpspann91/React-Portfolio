import './Projects.css'
import React from 'react'
import { CgGitFork, CgWebsite } from 'react-icons/cg'

function ProjectCards(props){
    return (
        <div className='card d-flex project-card' style={{width:'18rem', height: '30rem'}}>
            <img className='card-img-top'src={props.imgUrl} alt='card-img'style={{ height:'180px'}}/>
            <div className='card-body' style={{justifyContent:'center'}}>
                <h5 className='card-title'>{props.title}</h5>
                <p className='card-text project-text' style={{textAlign: 'center'}}>{props.description}</p>

                <div className='card-footer d-flex' style={{ position:'absolute', bottom: '0',justifyContent:'space-between', width:'16rem'}}>

                {props.isDeployed? 
                <button className='btn btn-primary'>
                    <a style={{color: 'white'}} href={props.deployedLink} target="_blank" rel="noreferrer">
                        <CgWebsite/> Site
                    </a>
                </button>: null}
                
                <button className='btn btn-success'> 
                    <a style={{color: 'white',}} href={props.gitHubRepo} target='_blank' rel="noreferrer">
                        <CgGitFork/>Git Repo
                    </a>
                </button>
                </div>
            </div>


        </div>
    )
}
export default ProjectCards