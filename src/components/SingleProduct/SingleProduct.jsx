import React from 'react'
import { Button, Card } from 'react-bootstrap'
import '../styles.css'
import Rating from '../Rating'
import { cartReducer } from '../Context/Reducers'
import { useCartState } from '../Context/Context'

const SingleProduct = ({ prod }) => {
  const { state: {cart}, dispatch} = useCartState()


  return (
    <div className='products'>
      <Card bg='dark'  style={{color:'wheat'}}>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (<div>Fast delivery</div>) : (<div>4 days delivery</div>)}
            <Rating rating={prod.rating}/>


            {
              cart.some(p => p.id === prod.id) ? 
              (<Button onClick={()=>{
              dispatch({
                type:'REMOVE_FROM_CART',
                payload: prod
              })
            }}
              variant='danger' style={{margin:'10px'}}>Remove from cart</Button>) :
               (            
            <Button onClick={()=>{
              dispatch({
                type:'ADD_TO_CART',
                payload: prod
              })
            }}
            variant={!prod.inStock ? 'secondary':'success'} style={{margin:'10px'}}  disabled={!prod.inStock }>
            {!prod.inStock ? 'Out of Stock' : 'Add to cart'}
            </Button>)
            }

          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct