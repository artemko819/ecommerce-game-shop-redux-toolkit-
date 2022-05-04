import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartTotalItem from '../../components/Header/Cart/CartMenu/CartTotalItem/CartTotalItem'
import ItemInCart from '../../components/Header/Cart/CartMenu/ItemInCart/ItemInCart'
import { deleteAllItems } from '../../redux/cart/reducer'
import "./OrderPage.css"

function OrderPage() {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(deleteAllItems())
    }
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = <CartTotalItem onClick={handleClick} items={items} />
 
    const titleGame = items.length > 0 ? items.map(game => <ItemInCart key={game.id} game={game} />) : 'Корзина пуста'
    if (items.length < 1) {
        return <h1>Ваша корзина пуста</h1>
    }

    return (
        <div className="order__page">
            <div className="game__list">
               {titleGame}
            </div>
            {totalPrice}
        </div>
    )
}

export default OrderPage