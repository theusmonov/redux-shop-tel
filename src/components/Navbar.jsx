import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, gettotal } from './Cart'



export default function Navbar() {
  const dispatch = useDispatch()
  const {amount} = useSelector((store) => store.cart)




  return (
    <div className='navbar'>
      <h2>Tel Shop</h2>
      <button className='clerbtn' onClick={() => dispatch(clearCart())}>Clearcart</button>
      <p>{amount}</p>
    </div>
  )
}
