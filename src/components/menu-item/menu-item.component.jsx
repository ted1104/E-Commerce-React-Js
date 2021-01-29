import React from 'react'
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom'

const MenuItem = ({ title, imageUrl,size, history,linkUrl, match }) =>(
    <div 
    onClick ={()=> history.push(`${linkUrl}`)}
    className={`${size} menu-item`} 
    style={{
        backgroundImage : `url(${ imageUrl })`
    }}>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <h2 className='subtitle'>SHOP NOW</h2>
        </div>
    </div>
)

export default withRouter(MenuItem);