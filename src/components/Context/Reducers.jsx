export const cartReducer = (state, action) => {
    console.log(state)
    // { products: Array(20), cart: Array(0) }
    // cart : []
    // products : (20)[{… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }]
    // [[Prototype]]:Object

    console.log(action)
    // { type: 'ADD_TO_CART', payload: {… } }
    //     payload:
    //         fastDelivery: false
    //         id: "ccc9171b-acde-48d6-87ce-84e2718aea8a"
    //         image: "http://placeimg.com/640/480/abstract"
    //         inStock: 6
    //         name: "Intelligent Fresh Chicken"
    //         price: "267.00"
    //         rating: 4
    //         [[Prototype]]: Object
    //     type: "ADD_TO_CART"
    //     [[Prototype]]: Object

    switch (action.type) {
        case 'ADD_TO_CART':
            // unpacking the state, inside the state, there is cart
            // unpack the cart, add the action payload, and inside the payload object, add quantity 1
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
        case 'REMOVE_FROM_CART':
            // updating the cart, filtering out the payload object
            return { ...state, cart: state.cart.filter(c => c.id !== action.payload.id) }
        default:
            return state;
    }
}