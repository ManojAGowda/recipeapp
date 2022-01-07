import React from 'react'
import './style.css'

function Recipes({item}) {

  return (
    <div>
      <h1 className='mt-2 item-head'>Recipe</h1>
      <div className="item-card border mt-3">
        <img src={item.image} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h3>{item.name}</h3>
          <p className="card-text">{item.howtodo}</p>
        </div>
      </div>
    </div>
  )
}

export default Recipes
