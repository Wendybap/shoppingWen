import { NavLink } from "react-router-dom";

function Navbar() {
  const activeStyle = "underline underline-offset-4";
  return (
    <>
      <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
        <ul className="flex items-center gap-3">
          <li className="font-semibold text-lg">
            <NavLink to="/">Shopi</NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clothes"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/electronic"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              Electronic
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/forniture"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              Forniture
            </NavLink>
          </li>
          <li>
            <NavLink
              to="toys"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/others"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              Others
            </NavLink>
          </li>
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
          <li>
            <NavLink
              to="toys"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              🛒0
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
