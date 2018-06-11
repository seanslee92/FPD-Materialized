import React from 'react'

// const CartQuantity = ({ drink, optionsArr, handleChange }) => {
//   let drinkOption = false;
//   return (
//   <select onChange={handleChange} name="quantity" value={{drinkId: drink.id, quantity: drink.quantity}}>
//     {optionsArr.map(option => {
//       if (option === drink.quantity) drinkOption = true;
//       if (option === 10) {
//         return <option key={option} value={`{drinkId: ${drink.id}, quantity: ${option}}`}>{option}+</option>
//       }
//       else {
//         return <option key={option} value={`{drinkId: ${drink.id}, quantity: ${option}}`}>{option}</option>
//       }
//     })}
//     {drinkOption ? '' : <option key={drink.quantity} value={{drinkId: drink.id, quantity: drink.quantity}}>{drink.quantity}</option>}
//   </select>
//   )
// }

const CartQuantity = ({ drink, optionsArr, handleChange }) => {
  let drinkOption = false;
  return (
  <select onChange={event => handleChange(event, drink.id)} name="quantity" value={drink.quantity}>
    {optionsArr.map(option => {
      if (option === drink.quantity) drinkOption = true;
      if (option === 10) {
        return <option key={option} value={option}>{option}+</option>
      }
      else {
        return <option key={option} value={option}>{option}</option>
      }
    })}
    {drinkOption ? '' : <option key={drink.quantity} value={drink.quantity}>{drink.quantity}</option>}
  </select>
  )
}

export default CartQuantity
