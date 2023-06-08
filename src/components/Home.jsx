import React from 'react'
import { useCartState } from './Context/Context'
import Filters from './Filters'
import SingleProduct from './SingleProduct/SingleProduct'

const Home = () => {
  const {state:{products},
  filter: { byStock, byFastDelivery, byRating, sort, searchQuery }} = useCartState()

  const transformProducts = ()=>{
    let sortedProducts = products

    if (sort){
      sortedProducts = sortedProducts.sort((a,b)=>(
        sort == 'lowToHigh' ? a.price - b.price : b.price - a.price
      ))
    }

    if (byFastDelivery){
      sortedProducts = sortedProducts.filter((prod)=>prod.fastDelivery)
    }
    if (byStock){
      sortedProducts = sortedProducts.filter((prod)=>prod.inStock)
    }

    if (byRating){
      sortedProducts = sortedProducts.filter(prod=>prod.rating >= byRating)
    }
    if(searchQuery){
      sortedProducts = sortedProducts.filter(prod=>
        prod.name.toLowerCase().includes(searchQuery)
        )
    }
    return sortedProducts
  }
  return (
    <div className='home'>
      <Filters/>
      <div className='productContainers'>
        {
          transformProducts().map((prod)=>{
            return <SingleProduct prod ={prod} key={prod.id}/>
        })
        }
      </div>
    </div>
  )
}

export default Home