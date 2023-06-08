import { Button, Form } from 'react-bootstrap'
import './styles.css'
import Rating from './Rating'

import { useCartState } from './Context/Context'

const Filters = () => {
  const { filter: { byStock, byFastDelivery, byRating, sort, searchQuery }, filterDispatch } = useCartState()
  console.log(byStock, byFastDelivery, sort, byRating, searchQuery)
  return (
    <div className='filters'>
      <span className='title'>
        Filter Products
      </span>
      <div></div>
      <span>
        <Form.Check inline label='Ascending' name='group1' type='radio' id='inline-1'
          onChange={() => filterDispatch({
            type: 'SORT_BY_PRICE', payload: "lowToHigh"
          })}
          checked={sort == 'lowToHigh' ? true : false}
        />
      </span>
      <span>
        <Form.Check inline label='Descending' name='group1' type='radio' id='inline-2'
          onChange={() => filterDispatch({
            type: 'SORT_BY_PRICE', payload: "highToLow"
          })}
          checked={sort == 'highToLow' ? true : false} />
      </span>
      <span>
        <Form.Check inline label='Include Out of Stock' name='group1' type='checkbox' id='inline-3' 
        onChange={()=>filterDispatch({
          type:'FILTER_BY_STOCK'
        })
          }
          checked={byStock} 
        />
      </span>
      <span>
        <Form.Check inline label='Fast deliveries only' name='group1' type='checkbox' id='inline-4'
                onChange={()=>filterDispatch({
          type:'FILTER_BY_DELIVERY'
        })
          }
          checked={byFastDelivery}  />
      </span>

      {/* rating system */}
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating rating={byRating} onClick={(e) => filterDispatch({
          type: 'FILTER_BY_RATING', payload: e + 1
        })} style={{ cursor: 'pointer' }} />
      </span>
      <Button variant='light' 
              onClick={()=>filterDispatch({
          type:'CLEAR_FILTERS'
        })
          }
          checked={byStock} >Clear Filters</Button>
    </div>
  )
}

export default Filters