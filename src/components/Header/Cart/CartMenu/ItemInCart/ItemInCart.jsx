import React from 'react'

function ItemInCart({game}) {
  return (
    <div className='item__in-cart'>
        <span>{game.title}</span>
        <span>{game.price}</span>
    </div>
  )
}

export default ItemInCart