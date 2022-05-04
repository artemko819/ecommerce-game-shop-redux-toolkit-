import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import './cart.css'
import { useSelector } from 'react-redux'
import CartMemu from './CartMenu/CartMemu'
import { calcTotalPrice } from '../../../utils/calcTotalPrice'
import ItemsCount from './ItemsCout/ItemsCount'
import { useNavigate } from 'react-router-dom'
function Cart() {
  const [isVisiable, setVisiable] = useState(false)
  const items = useSelector(state => state.cart.itemsInCart)
  const totalPrice = calcTotalPrice(items)
  const navigate = useNavigate()
  const handleClick = ()=>{
    setVisiable(false)
    navigate('/order')
  }
  return (
    <div className='cart__block'>
      {items.length > 0 ? <ItemsCount count={items.length}/> : null}
      <ShoppingCartIcon className='cart__icon' onClick={()=>setVisiable(!isVisiable)} />
      {totalPrice > 0 ? <span className='total__price'>{totalPrice} грн.</span> : null}
      {isVisiable ? <CartMemu items={items} onClick={handleClick} /> : null}
    </div>
  )
}

export default Cart