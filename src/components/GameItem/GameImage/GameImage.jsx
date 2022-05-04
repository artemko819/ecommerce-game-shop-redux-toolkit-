import React from 'react'

function GameImage({image}) {
  return (
    <div className='game__image' style={{background:`url(${image}) center`}}></div>
  )
}

export default GameImage