import { createContext, useState, useEffect } from "react";

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

  function setOrderInContext(newOrder) {
    setOrder(newOrder);
  }

  // Get Products
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

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
          items,
          setItems,
          setOrderInContext,
        }}
      >
        {children}
      </ShoppingCartContext.Provider>
    </>
  );
}
export { ShoppingCartProvider, ShoppingCartContext };
