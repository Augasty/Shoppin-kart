import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './styles.css'
import Rating from './Rating'

const Filters = () => {
  const [rate,setRate] = useState(3)
  return (
    <div className='filters'>
      <span className='title'>
        Filter Products
      </span>
      <div></div>
      <span>
        <Form.Check inline label='Ascending' name='group1' type='radio' id='inline-1' />
      </span>
      <span>
        <Form.Check inline label='Descending' name='group1' type='radio' id='inline-2' />
      </span>
      <span>
        <Form.Check inline label='Include Out of Stock' name='group1' type='checkbox' id='inline-3' />
      </span>
      <span>
        <Form.Check inline label='Fast deliveries only' name='group1' type='checkbox' id='inline-4' />
      </span>

      {/* rating system */}
      <span>
      <label style={{paddingRight: 10}}>Rating: </label>
      <Rating rating={rate} onClick={(e)=>setRate(e+1)} style={{cursor: 'pointer'}}/>
      </span>
      <Button variant='light'>Clear Filters</Button>
    </div>
  )
}

export default Filters