import { createContext, useState, useEffect } from "react";
import { json } from "react-router-dom";

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

  // Get Products
  const [items, setItems] = useState([]);

  // State for products filtered by title
  const [filteredItems, setFilteredItems] = useState([]);

  // Get products by title / Capture and update the value of the input
  const [searchByTitle, setSearchByTitle] = useState("");

  // Get products filtered by category
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  useEffect(() => {
    // Get products filtered
    function applyFilters() {
      let filteredProducts = [...items];

      //Filter by title if searchByTitle is not empty
      if (searchByTitle) {
        filteredProducts = filteredProducts.filter((item) =>
          item.title.toLowerCase().includes(searchByTitle.toLowerCase())
        );
      }

      // Filter by category if selectedCategory in not null
      if (selectedCategory) {
        filteredProducts = filteredProducts.filter(
          (item) =>
            item.category.name.toLowerCase() === selectedCategory.toLowerCase()
        );
      }
      setFilteredItems(filteredProducts);
    }
    applyFilters();
  }, [items, searchByTitle, selectedCategory]);

  // User authentication (sign-In / sign-Out)

  function initializeLocalStorage() {
    // Initialize upon account and signOut

    const accountInLocalStorages = localStorage.getItem("account");
    const signOutInLocalStorage = localStorage.getItem("signOut");
    let parseAccount;
    let parseSignOut;

    if (!accountInLocalStorages) {
      localStorage.setItem("account", JSON.stringify({}));
      parseAccount = {};
    } else {
      parseAccount = JSON.parse(accountInLocalStorages);
    }

    if (!signOutInLocalStorage) {
      localStorage.setItem("signOut", false);
      parseSignOut = false;
    } else {
      parseSignOut = JSON.parse(signOutInLocalStorage);
    }
  }

  // Create states for account and signOut
  const [account, setAccount] = useState({});

  const [signOut, setSignOut] = useState(false);

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
          searchByTitle,
          setSearchByTitle,
          filteredItems,
          setFilteredItems,
          selectedCategory,
          setSelectedCategory,
          initializeLocalStorage,
          account,
          setAccount,
          signOut,
          setSignOut,
        }}
      >
        {children}
      </ShoppingCartContext.Provider>
    </>
  );
}
export { ShoppingCartProvider, ShoppingCartContext };
