import  { useEffect, useState } from 'react'
import { useCartState } from './Context/Context'
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import './styles.css'
import Rating from './Rating'
import { AiFillDelete } from 'react-icons/ai'

const Cart = () => {
  const { state: { cart }, dispatch } = useCartState()
  const [total,setTotal] = useState(0)
 useEffect(() => {
   setTotal(cart.reduce((acc,curr)=>acc + Number(curr.price)*curr.qty,0))

 }, [cart])
 
  return (

    <div className='home'>
      <div className='productContainers'>
        <ListGroup>
          {
            cart.map((prod) => {
            return (
              <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}><Image src={prod.image} fluid rounded /></Col>
                <Col md={2}><span>{prod.name}</span></Col>
                <Col md={2}>{prod.price}</Col>
                <Col md={2}>
                  <Rating rating={prod.rating}/>
                </Col>

                
                <Col md={2}>
                  <Form.Control as='select' value={prod.qty}
                  onChange={
                    (e)=> {
                      console.log(e.target)
                      return dispatch({
                      type: 'CHANGE_CART_QTY',
                      payload:{
                        id: prod.id,
                        qty: e.target.value
                      }
                    })}                    
                  }>
                    {
                      [...Array(prod.inStock).keys()].map((q)=>(
                        <option key={q+1}>{q+1}</option>
                      ))
                    }
                  </Form.Control>
                </Col>

                <Col md={2}>
                <AiFillDelete fontSize='20px' style={{ cursor: 'pointer' }}
                          onClick={() => {
                            dispatch({
                              type: 'REMOVE_FROM_CART',
                              payload: prod
                            })
                          }} />
                </Col>
              </Row>
              </ListGroup.Item>
            )})
          }</ListGroup>
      </div>
      <div className='filters summary'>
        <span className='title'>Subtotal {cart.length} items</span>
        <span style={{fontWeight:700, fontSize:20}}>Total: ₹ {total} </span>
        <Button type='button' disabled={cart.length == 0}>Proceed to checkout</Button>
      </div>
    </div>
  )
}

export default Cart