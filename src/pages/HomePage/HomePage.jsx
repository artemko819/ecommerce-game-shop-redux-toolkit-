import React from 'react'
import GameItem from '../../components/GameItem/GameItem'
import { GAMES } from '../../utils/games'
import './HomePage.css'
function HomePage() {
  return (
    <div className='home-page'>
      { GAMES.map(game => <GameItem game={game} key={game.id} />)}
    </div>
  )
}

export default HomePage