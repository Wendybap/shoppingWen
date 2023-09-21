import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const context = useContext(ShoppingCartContext);

  function handleSignOut() {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem("signOut", stringifiedSignOut);
    context.setSignOut(true);
  }
  const activeStyle = "underline underline-offset-4";
  return (
    <>
      <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
        <>
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
                to="/shoes"
                onClick={() => {
                  context.setSelectedCategory("shoes");
                }}
                className={({ isActive }) => (isActive ? activeStyle : "")}
              >
                Shoes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/furniture"
                onClick={() => {
                  context.setSelectedCategory("furniture");
                }}
                className={({ isActive }) => (isActive ? activeStyle : "")}
              >
                Furniture
              </NavLink>
            </li>
            <li>
              <NavLink
                to="electronics"
                onClick={() => {
                  context.setSelectedCategory("electronics");
                }}
                className={({ isActive }) => (isActive ? activeStyle : "")}
              >
                Electronics
              </NavLink>
            </li>
            <NavLink
              to="/others"
              onClick={() => {
                context.setSelectedCategory("others");
              }}
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              Others
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
                to="/Sign-In"
                className={({ isActive }) => (isActive ? activeStyle : "")}
                onClick={() => handleSignOut()}
              >
                Sign Out
              </NavLink>
            </li>
            <li className="flex items-center">
              <ShoppingCartIcon className="h-6 w-6 text-black-500 " />
              <div>{context.cartProducts.length}</div>
            </li>
          </ul>
        </>
      </nav>
    </>
  );
}
export default Navbar;
