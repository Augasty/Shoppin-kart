import { createContext, useContext, useReducer} from 'react'
import faker from "faker"
import { cartReducer , filterReducer } from './Reducers'

faker.seed(100)
const CartContext = createContext()

const Context = ({ children }) => {
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement([0, 3, 0, 5, 6, 0, 7]),
        fastDelivery: faker.datatype.boolean(),
        rating: faker.random.arrayElement([1, 2, 3, 4, 5])
    }))

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })
    const [filter, filterDispatch] = useReducer(filterReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: ''
    })
    

    return (
        <CartContext.Provider value={{ state, dispatch, filter, filterDispatch }}>{children}</CartContext.Provider>
    )
}

export default Context


export const useCartState = () => {
    return useContext(CartContext)
}