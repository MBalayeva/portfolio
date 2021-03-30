import React from 'react'

function MenuItems({title, image, link1, link2}) {
    return (
        <div className='portfolio'>
            <div className='image-data'>
                <img src={image} alt='' />
                <ul className='hover-items'>
                    <li>{link1}</li>
                    <li>{ link2}</li>
                </ul>
            </div>
            <h5>{title}</h5>
            <p>Placeholder paragraph</p>
        </div>
    )
}

export default MenuItems
