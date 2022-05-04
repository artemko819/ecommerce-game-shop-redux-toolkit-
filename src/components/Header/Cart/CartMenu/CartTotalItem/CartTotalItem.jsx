import React from 'react'
import { calcTotalPrice } from '../../../../../utils/calcTotalPrice'
import Button from '../../../../Button/Button'

function CartTotalItem({items, onClick }) {
  return (
    <div className='cart__menu-arrange'>
        <div className="cart__menu-total__price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} грн.</span>
        </div>
        <Button type="primary" onClick={onClick} size='m'>
            Оформить заказ
        </Button>
    </div>
  )
}

export default CartTotalItem