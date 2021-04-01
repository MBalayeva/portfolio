import React from 'react'

function Categories({filter, categories}) {
    return (
        <div className='btns'>
            {categories.map((cat, id) => {
                return (
                  <button className="portfolio-btn" onClick={()=>filter(cat)} key={id}>
                    {cat}
                  </button>
                );
            })}
        </div>
    )
}

export default Categories
