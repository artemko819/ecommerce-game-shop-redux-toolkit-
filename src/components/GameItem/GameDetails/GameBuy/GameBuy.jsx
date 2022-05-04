import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemInCart, deleteItemInCart } from '../../../../redux/cart/reducer';

import Button from '../../../Button/Button'

function GameBuy({ game }) {
    const dispatch = useDispatch();

    const items = useSelector((state) => {
        return state.cart.itemsInCart
    })

    const isItemIncart = items.some(item => item.id === game.id)

    const handleClick = (e) => {
        e.stopPropagation()
        if(isItemIncart){
            dispatch(deleteItemInCart(game.id))
        }else{
            dispatch(addItemInCart(game));
        }
        
    }

    return (
        <div className='game__buy'>
            <span className='game__buy-price'>{game.price} грн.</span>
            <Button onClick={handleClick}
                type={ isItemIncart ? 'secondary' : 'primary'}
            >
               { isItemIncart ? 'Убрать из корзины' : 'В корзину' }
            </Button>
        </div>
    )
}

export default GameBuy