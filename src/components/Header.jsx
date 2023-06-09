import { Badge, Button, Container, Dropdown, FormControl, Navbar } from 'react-bootstrap'
import { BsCart, BsCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './styles.css'
import { useCartState } from './Context/Context'
import { AiFillDelete } from 'react-icons/ai'
import debounce from 'lodash.debounce'
import { useEffect, useMemo } from 'react'

const Header = () => {

  const { state: { cart }, dispatch, filterDispatch } = useCartState()

    const debouncedResults = useMemo(() => {
        return debounce((e)=>{
              // throttle
              filterDispatch({ 
                type: "FILTER_BY_SEARCH",
                payload: e.target.value
              })
            }, 1000);
    });
    useEffect(() => {
        return () => {
            debouncedResults.cancel();
        };
    });
  return (
    <div className='header'>
      <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to='/'>Home</Link>
          </Navbar.Brand>

          <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic" >

              {cart.length ?
                <BsCartFill color='white' fontSize='25px' />
                :
                <BsCart color='white' fontSize='25px' />
              }

              <Badge bg="success">{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: '370px' }} alignLeft>
              {cart.length > 0 ?
                (<div>
                  {
                    cart.map((prod) => (
                      <span className='cartItem' key={prod.id}>
                        <img src={prod.image} className='cartItemImg' alt={prod.name} />
                        <div className='cartItemDetail'>
                          <span>{prod.name}</span>
                          <span>₹ {prod.price.split(".")[0]}</span>
                        </div>
                        <AiFillDelete fontSize='20px' style={{ cursor: 'pointer' }}
                          onClick={() => {
                            dispatch({
                              type: 'REMOVE_FROM_CART',
                              payload: prod
                            })
                          }} />
                      </span>
                    ))
                  }
                  <Link to='./cart'>
                    <Button style={{ width: '95%', margin: '0 10px' }}>Go to cart</Button>
                  </Link>

                </div>


                ) :
                (<span style={{ padding: 10 }}>Cart is empty</span>)}
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Text className='search'>
            <FormControl style={{ width: 500 }} placeholder='search something...' className='m-auto'
            onChange={debouncedResults}
             />
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header