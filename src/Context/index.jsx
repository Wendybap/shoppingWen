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

  // Get Products
  const [items, setItems] = useState(null);

  // State for products filtered by title
  const [filteredItems, setFilteredItems] = useState(null);

  // Get products by title / Capture and update the value of the input
  const [searchByTitle, setSearchByTitle] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  // Get products filtered by title
  function filteredItemsByTitle(items, searchByTitle) {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  }

  // Get products filtered by category
  const [selectedCategory, setSelectedCategory] = useState(null);

  function filteredItemsByCategory(items, selectedCategory) {
    if (!selectedCategory) {
      items;
    }
    return items.filter(
      (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }

  function filterBy(searchType, items, searchByTitle, selectedCategory) {
    if (searchType === "ByTitle") {
      return filteredItemsByTitle(items, searchByTitle);
    }
    if (searchType === "ByCategory") {
      return filteredItemsByCategory(items, selectedCategory);
    }
    if (searchType === "ByTitleAndCategory") {
      return filteredItemsByCategory(items, selectedCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }
    if (!searchType) {
      return items;
    }
  }
  // Update setFilteredItems
  useEffect(() => {
    if (searchByTitle && !selectedCategory)
      setFilteredItems(
        filterBy("ByTitle", items, searchByTitle, selectedCategory)
      );
    if (selectedCategory && !searchByTitle)
      setFilteredItems(
        filterBy("ByCategory", items, searchByTitle, selectedCategory)
      );
    if (searchByTitle && selectedCategory)
      setFilteredItems(
        filterBy("ByTitleAndCategory", items, searchByTitle, selectedCategory)
      );
    if (!selectedCategory && !searchByTitle)
      setFilteredItems(filterBy(null, items, searchByTitle, selectedCategory));
  }, [items, searchByTitle, selectedCategory]);

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
          filteredItemsByTitle,
          selectedCategory,
          setSelectedCategory,
          filteredItemsByCategory,
          filterBy,
        }}
      >
        {children}
      </ShoppingCartContext.Provider>
    </>
  );
}
export { ShoppingCartProvider, ShoppingCartContext };
