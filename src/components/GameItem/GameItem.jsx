import React from 'react'
import GameDetails from './GameDetails/GameDetails'
import GameImage from './GameImage/GameImage'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setCurrentGame } from '../../redux/game/reducer';

function GameItem({ game }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = ()=> {
        dispatch(setCurrentGame(game))
        navigate(`/game/${game.title}`)
    }
    return (
        <div className='game__item' onClick={handleClick}>
            <GameImage image={game.image} />
            <GameDetails game={game}/>
        </div>
    )
}

export default GameItem