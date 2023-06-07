import { Badge, Container, Dropdown, FormControl, Navbar } from 'react-bootstrap'
import { BsCart, BsCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './styles.css'

const Header = () => {
  const length = 0
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

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">

              {length ?
                <BsCartFill color='white' fontSize ='25px' />
                :
                <BsCart color='white' fontSize='25px' />
              }


              <Badge bg="success">{length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header