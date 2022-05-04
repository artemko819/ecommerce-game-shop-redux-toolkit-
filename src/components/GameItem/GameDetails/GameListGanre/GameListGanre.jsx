import React from 'react'
import GameGanre from './GameGanre/GameGanre'

function GameListGanre({game}) {
  return (
    <div className="game__item-genre">
                {game.genres.map((genre, index) => <GameGanre key={index} genre={genre} />)}
    </div>
  )
}

export default GameListGanre