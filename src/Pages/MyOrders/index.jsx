import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <>
      <Layout>
        <div className="flex w-80 items-center justify-center relative">
          <h1>My Orders</h1>
        </div>
        {context.order.map((order, index) => {
          <Link key={index} to={`/MyOrders/${order.id}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>;
        })}
      </Layout>
    </>
  );
}
export default MyOrders;
