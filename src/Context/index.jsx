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
        }}
      >
        {children}
      </ShoppingCartContext.Provider>
    </>
  );
}
export { ShoppingCartProvider, ShoppingCartContext };
