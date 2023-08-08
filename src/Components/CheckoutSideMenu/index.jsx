import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XCircleIcon } from "@heroicons/react/24/solid";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import "./checkoutSideMenu.css";

function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

  //   Delete product from the shopping cart
  function handleDelete(id) {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(filteredProducts);
  }

  return (
    <>
      <aside
        className={`${
          context.isCheckoutSideMenuOpen ? "flex" : "hidden"
        } checkoutSideMenu flex-col fixed right-0 border border-black rounded-lg bg-white`}
      >
        <div className="flex justify-between items-center p-6">
          <h2 className="font-medium text-xl">My Order</h2>
          <div>
            <XCircleIcon
              className="h-6 w-6 text-black-500 cursor-pointer"
              onClick={() => context.closeCheckoutSideMenu()}
            />
          </div>
        </div>
        <div className="px-6 overflow-y-scroll">
          {context.cartProducts.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))}
        </div>
        <div className="px-6">
          <p className="flex justify-between items-center">
            <span className="font-light">Total:</span>
            <span className="font-medium text-2xl">
              ${totalPrice(context.cartProducts)}
            </span>
          </p>
        </div>
      </aside>
    </>
  );
}
export default CheckoutSideMenu;
