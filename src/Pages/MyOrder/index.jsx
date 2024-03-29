import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  // Read URL
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  if (index === "last") index = context.order?.length - 1;

  return (
    <>
      <Layout>
        <div className="flex w-80 items-center justify-center relative mb-6">
          <Link to={"/MyOrders"} className="absolute left-0">
            <ChevronDoubleLeftIcon className="h-6 w-6 text-black-500 cursor-pointer " />
          </Link>
          <h1>My Order</h1>
        </div>

        <div className="flex flex-col w-80">
          {context.order?.[index]?.products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imagesUrl={product.images}
              price={product.price}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}
export default MyOrder;
