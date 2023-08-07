import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XCircleIcon } from "@heroicons/react/24/solid";
import OrderCard from "../OrderCard";
import "./checkoutSideMenu.css";

function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

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
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))}
        </div>
      </aside>
    </>
  );
}
export default CheckoutSideMenu;
