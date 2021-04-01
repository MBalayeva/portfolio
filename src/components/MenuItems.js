import React from 'react'

function MenuItems({title, image, link1, link2, icon1, icon2}) {
    return (
        <div className='portfolio'>
            <div className='image-data'>
                <img src={image} alt='' />
                <ul className='hover-items'>
                    <li><a href={link1}>{icon1 }</a></li>
                    <li><a href={link2}>{icon2 }</a></li>
                </ul>
            </div>
            <h5>{title}</h5>
            <p>Placeholder paragraph</p>
        </div>
    )
}

export default MenuItems
