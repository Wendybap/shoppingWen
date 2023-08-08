/**
 * this function calculates total price of a new order
 * @param {Array} products = cartProducts: this is a array of Objects
 * @returns {number} total price
 */
export const totalPrice = (products) => {
  let suma = 0;
  for (let i = 0; i < products.length; i++) {
    suma += products[i].price;
  }
  return suma;
};
