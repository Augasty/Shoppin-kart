const state = {
    one: { name: 'rana', state: 'wb' },
    two: { name: 'sayak', state: 'solid' }
}

function foo(obj) {
    return { ...obj, one: { ...obj.one, qty: 7 } }
}
function foo2(obj) {
    return { ...obj, three: { ...obj.one, qty: 7 } }
}
function foo3(obj) {
    return { obj, three: { ...obj.one, qty: 7 } }
}


console.log(foo(state))
console.log(foo2(state))
console.log(foo3(state))

// {
//     one: { name: 'rana', state: 'wb', qty: 7 },
//     two: { name: 'sayak', state: 'solid' }
//   }
//   {
//     one: { name: 'rana', state: 'wb' },
//     two: { name: 'sayak', state: 'solid' },
//     three: { name: 'rana', state: 'wb', qty: 7 }
//   }
// {
//     obj: {
//       one: { name: 'rana', state: 'wb' },
//       two: { name: 'sayak', state: 'solid' }
//     },
//     three: { name: 'rana', state: 'wb', qty: 7 }
//   }