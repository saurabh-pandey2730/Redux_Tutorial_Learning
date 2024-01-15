import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { closeModel } from '../features/models/modelSlice'

const Model = () => {
    const dispatch =useDispatch()
  return (
    <aside className='model-container'>
        <div className='model'>
            <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
            <button type='button ' className='btn confirm-btn' 
            onClick={()=>{
                dispatch(clearCart())
                dispatch(closeModel())
            }}>confirm</button>
            <button type='button ' className='btn clear-btn'
            onClick={()=>{
                dispatch(closeModel())
            }}>cancel</button>
        </div>
        </div>
      
    </aside>
  )
}

export default Model
