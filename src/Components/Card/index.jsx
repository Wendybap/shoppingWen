import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

function Card(data) {
  const context = useContext(ShoppingCartContext);

  // Open the product detail and send information to the global state (Update the global state)
  function showProduct(productDetail) {
    context.openProductDetail();
    context.setProductToShow(productDetail);
    context.closeCheckoutSideMenu();
  }

  // Add to Shopping Cart
  function addProductsToCart(event, productData) {
    event.stopPropagation();

    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  }

  function renderIcon(id) {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;
    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
          <CheckIcon className="h-6 w-6 text-white" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductsToCart(event, data.data)}
        >
          <PlusIcon className="h-6 w-6 text-black" />
        </div>
      );
    }
  }
  return (
    <>
      <div
        className="bg-white cursor-pointer w-56 h-60 rounded-lg"
        onClick={() => showProduct(data.data)}
      >
        <figure className=" relative mb-2 w-full h-4/5">
          <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sx m-2 px-3 py-0.5">
            {data.data.category.name}
          </span>
          <img
            className="w-full h-full object-cover rounded-lg"
            src={data.data.images}
            alt={data.data.title}
          />

          {renderIcon(data.data.id)}
        </figure>
        <p className="flex justify-between">
          <span className="text-sm font-light">{data.data.title}</span>
          <samp className="text-lg font-medium">${data.data.price}</samp>
        </p>
      </div>
    </>
  );
}
export default Card;
