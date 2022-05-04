import React from 'react'
import GameBuy from './GameBuy/GameBuy'
import GameListGanre from './GameListGanre/GameListGanre'

function GameDetails({game}) {
    return (
        <div className="game__item-details">
            <span className='game__item-title'>
                {game.title}
            </span>
            <GameListGanre game={game}/>
            <GameBuy game={game}/>
        </div>

    )
}

export default GameDetails