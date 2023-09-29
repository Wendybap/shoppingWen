import { useContext, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";

function SignIn() {
  const context = useContext(ShoppingCartContext);

  // Capture the value of the form in the DOM with Ref.
  const form = useRef(null);

  // Create local state to switch the rendering view
  const [view, setView] = useState("userInfo");

  const navigate = useNavigate();

  // Read account from localStorage and global state
  const accountLocalStorage = localStorage.getItem("account");
  const parseAccount = JSON.parse(accountLocalStorage);
  const accountState = context.account;

  // To verify if the user has an account
  const noAccountInLocalStorage = parseAccount
    ? Object.keys(parseAccount).length === 0
    : true;
  const noAccountState = accountState
    ? Object.keys(accountState).length === 0
    : true;
  const userHasAccount = !noAccountInLocalStorage || !noAccountState;

  function handleSignIn() {
    const stringifiedSignOut = JSON.stringify(false);
    localStorage.setItem("signOut", stringifiedSignOut);
    context.setSignOut(false);

    // Redirect
    navigate("/");
  }

  // Create Account
  function createAnAccount() {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // Save account in localStorage
    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem("account", stringifiedAccount);
    context.setAccount(data);
    // Sign In
    handleSignIn();
  }

  function renderLogIn() {
    return (
      <div>
        <div className="flex flex-col w-80">
          <p>
            <span className="font-light text-sm">Email:</span>
            <span>{parseAccount?.email}</span>
          </p>
          <p>
            <span className="font-light text-sm">Passwoed:</span>
            <span>{parseAccount?.password}</span>
          </p>

          <button
            className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
            onClick={() => handleSignIn()}
            disabled={!userHasAccount}
          >
            Log in
          </button>

          <div className="text-center">
            <a
              href="/"
              className="font-light text-xs underline underline-offset-4"
            >
              Forgot my password
            </a>
          </div>
          <button
            className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
            disabled={userHasAccount}
            onClick={() => setView("CreateUserInfo")}
          >
            Sign up
          </button>
        </div>
      </div>
    );
  }

  // Create Form
  function renderCreateUserInfo() {
    return (
      <form ref={form} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parseAccount?.name}
            placeholder="Mari"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-light text-sm">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={parseAccount?.email}
            placeholder="ejemplo@ejemplo.com"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-light text-sm">
            Email
          </label>
          <input
            type="text"
            id="password"
            name="password"
            defaultValue={parseAccount?.password}
            placeholder="***********"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <link to="/" />
        <button
          className="bg-black text-white w-full rounded-lg py-3"
          onClick={(e) => {
            e.preventDefault();
            createAnAccount();
          }}
        >
          Create
        </button>
      </form>
    );
  }

  function renderView() {
    return view === "CreateUserInfo" ? renderCreateUserInfo() : renderLogIn();
  }
  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6">Welcome</h1>
      {renderView()}
    </Layout>
  );
}
export default SignIn;
