import React from 'react'
import { useCartState } from './Context/Context'
import Filters from './Filters'
import SingleProduct from './SingleProduct/SingleProduct'

const Home = () => {
  const {state:{products},dispatch} = useCartState()
  console.log(products)
  return (
    <div className='home'>
      <Filters/>
      <div className='productContainers'>
        {
          products.map((prod)=>{
            return <SingleProduct prod ={prod} key={prod.id}/>
        })
        }
      </div>
    </div>
  )
}

export default Home