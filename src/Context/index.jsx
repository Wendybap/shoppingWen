import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  // Shopping Cart: Increment Quantity  (Count)
  const [count, setCount] = useState(0);

  // Product Detail Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  function openProductDetail() {
    setIsProductDetailOpen(true);
  }
  function closeProductDetail() {
    setIsProductDetailOpen(false);
  }

  // Product Detail: Show Product

  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart: add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Checkout Side Menu: Open/Close
  const [isCheckoutSideMenuOpen, setsCheckoutSideMenuOpen] = useState(false);

  function openCheckoutSideMenu() {
    setsCheckoutSideMenuOpen(true);
  }
  function closeCheckoutSideMenu() {
    setsCheckoutSideMenuOpen(false);
  }

  // Checkout Side Menu: My Order
  const [order, setOrder] = useState([]);

  return (
    <>
      <ShoppingCartContext.Provider
        value={{
          count,
          setCount,
          isProductDetailOpen,
          setIsProductDetailOpen,
          openProductDetail,
          closeProductDetail,
          productToShow,
          setProductToShow,
          cartProducts,
          setCartProducts,
          isCheckoutSideMenuOpen,
          setsCheckoutSideMenuOpen,
          openCheckoutSideMenu,
          closeCheckoutSideMenu,
          order,
          setOrder,
        }}
      >
        {children}
      </ShoppingCartContext.Provider>
    </>
  );
}
export { ShoppingCartProvider, ShoppingCartContext };
