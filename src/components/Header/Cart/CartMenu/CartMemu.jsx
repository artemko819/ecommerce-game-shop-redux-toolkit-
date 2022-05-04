import React from 'react'
import CartTotalItem from './CartTotalItem/CartTotalItem'
import ItemInCart from './ItemInCart/ItemInCart'

function CartMemu({items, onClick}) {
  return (
    <div className='cart__menu'>
        <div className="game__list">
         {items.length >0 ? items.map( game => <ItemInCart key={game.id} game={game}/>) : 'Корзина пуста' }
        </div>
        {
          items.length >0 ? <CartTotalItem onClick={onClick} items={items}/> : null
        }
    </div>
  )
}

export default CartMemu