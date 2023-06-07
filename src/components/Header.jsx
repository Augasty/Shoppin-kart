import { Badge, Container, Dropdown, FormControl, Navbar } from 'react-bootstrap'
import { BsCart, BsCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './styles.css'
import { useCartState } from './Context/Context'
import { AiFillDelete } from 'react-icons/ai'

const Header = () => {
  
  const {state:{cart},dispatch} = useCartState()

  return (
    <div className='header'>
      <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to='/'>logo</Link>
          </Navbar.Brand>
          <Navbar.Text className='search'>
            <FormControl style={{ width: 500 }} placeholder='search something...' className='m-auto' />
          </Navbar.Text>

          <Dropdown alignRight>
            <Dropdown.Toggle variant="success" id="dropdown-basic">

              {cart.length ?
                <BsCartFill color='white' fontSize ='25px' />
                :
                <BsCart color='white' fontSize='25px' />
              }

              <Badge bg="success">{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{minWidth: '370px'}} alignLeft>
            {cart.length > 0 ? 
            (<div>
              {
                cart.map((prod)=>(
                  <span className='cartItem' key= {prod.id}>
                    <img src={prod.image} className='cartItemImg' alt={prod.name}/>
                    <div className='cartItemDetail'>
                      <span>{prod.name}</span>
                      <span>₹ {prod.price.split(".")[0]}</span>
                    </div>
                    <AiFillDelete fontSize='20px' style={{cursor:'pointer'}}
                    onClick={()=>{
                      dispatch({
                type:'REMOVE_FROM_CART',
                payload: prod
              })
                    }}/>
                  </span>
                ))
              }</div>
            ) :
            ( <span style={{padding:10}}>Cart is empty</span>)}
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header