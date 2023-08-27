import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const context = useContext(ShoppingCartContext);

  const activeStyle = "underline underline-offset-4";
  return (
    <>
      <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
        <ul className="flex items-center gap-3">
          <li className="font-semibold text-lg">
            <NavLink to="/">Shopi</NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={() => {
                context.setSelectedCategory();
              }}
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/men's clothing"
              onClick={() => {
                context.setSelectedCategory("men's clothing");
              }}
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              Men's clothing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/women's clothing"
              onClick={() => {
                context.setSelectedCategory("women's clothing");
              }}
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              Women's clothing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="jewelery"
              onClick={() => {
                context.setSelectedCategory("jewelery");
              }}
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              Jewelery
            </NavLink>
          </li>
          <NavLink
            to="/electronics"
            onClick={() => {
              context.setSelectedCategory("electronics");
            }}
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Electronics
          </NavLink>
        </ul>
        <ul className="flex items-center gap-3">
          <li className="text-black/60">wendyarcia1811@gmail.com</li>
          <li>
            <NavLink
              to="/MyAccount"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/MyOrder"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              My Order
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/MyOrders"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/SingIn"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              SingIn
            </NavLink>
          </li>
          <li className="flex items-center">
            <ShoppingCartIcon className="h-6 w-6 text-black-500 " />
            <div>{context.cartProducts.length}</div>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
