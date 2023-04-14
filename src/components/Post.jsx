import React, { useEffect } from 'react'
import { remove } from './Cart'
import { useDispatch, useSelector } from 'react-redux'
import {increment} from './Cart'
import {decrement} from './Cart'





export default function Post({id, title, price, img, amount}) {

  const dispatch = useDispatch(id)
 

 
  
   
   
  
    
  return (
    <div className='card'>
        <div className='cards'>
        <div className='cardtitle'>{title}</div>
        <div className='cardimg'><img className='cardimgg' src={img} alt="" /></div>
        <div className='cardprice'>{price}</div>
        <button onClick={() => dispatch( remove(id))} className='cardremove'>remove</button>
        </div>
        <div className='incdec'>
            <button onClick={() => dispatch(increment(id))} className='inc'>+</button>
            <p className='amount'> {amount}</p>
          
            <button onClick={() => dispatch(decrement(id))} className='dec'>--</button>
            
        </div>
     
       
        
        
       
        
        
    </div>
  )
}