import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import Cart from './Cart/Cart'

function Header() {
  return (
    <header>
        <div className="wrapper">
            <Link to={'/'} className='header__store-title'>
                Game Store
            </Link>
        </div>
        <div className='wrapper header__cart-btn-wrapper'>
            <Cart/>
        </div>
    </header>
  )
}

export default Header