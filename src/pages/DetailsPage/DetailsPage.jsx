import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import GameBuy from '../../components/GameItem/GameDetails/GameBuy/GameBuy'
import GameListGanre from '../../components/GameItem/GameDetails/GameListGanre/GameListGanre'
import { setCurrentGame } from '../../redux/game/reducer'
import { GAMES } from '../../utils/games'
import './DetailsPage.css'

function DetailsPage() {
    const game = useSelector(state => state.game.currentGame)
    const dispatch = useDispatch();
    const { title } = useParams();
    useEffect(() => {
      const currentGame = GAMES.find(game => game.title === title);
      dispatch(setCurrentGame(currentGame))
    })



    if(!game) return `404 not found`;
    return (
        <div className="game__page">
            <h1 className="home__page-title">
                {game.title}
            </h1>
            <div className="game__page-content">
                <div className="game__page-left">
                    <iframe
                        width="90%"
                        height="400px"
                        src={game.video}
                        title="Youtube Video Player"
                    >
                    </iframe>
                </div>
                <div className="game__page-right">
                    <img src={game.image} alt="" />
                    <p>{game.description}</p>
                    <p className='secondary__text'>Популярные метки этого продукта:</p>
                    <GameListGanre game={game} />
                    <div className='game-page__buy-game'>
                        <GameBuy game={game} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage