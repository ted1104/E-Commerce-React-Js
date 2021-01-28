import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl,size }) =>(
    <div 
    className={`${size} menu-item`} 
    style={{
        backgroundImage : `url(${ imageUrl })`
    }}>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <h2 className='subtitle'>SHOP NOW</h2>
        </div>
    </div>
)

export default MenuItem;