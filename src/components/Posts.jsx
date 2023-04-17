import React, { useEffect } from 'react'
import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { gettotal } from './Cart';





export default function Posts({user}) {
   

   

    const {total,data} = useSelector((store) => store.cart)
    const dispatch = useDispatch()


    useEffect(() => {
      dispatch(gettotal())
    }, [data])

  return (
    <div className='postitem'>
      <h2 className='salom'> Assalomu Alaykum {user
      .name}</h2>
       {data.map((item) => {
        return (
            <Post key={item.id} {...item} />
        )
       })}
       <h2>{total.toFixed(2)}</h2>
    </div>
  )
}