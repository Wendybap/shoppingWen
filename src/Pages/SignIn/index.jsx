import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";

function SignIn() {
  const context = useContext(ShoppingCartContext);

  // function handleLoginClick() {
  //   context.handleLogin();
  // }
  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6">Welcome</h1>
      <div className="flex flex-col w-80">
        <p>
          <span className="font-light text-sm">Email:</span>
          <span>ejemplo@ejemplo.com</span>
        </p>
        <p>
          <span className="font-light text-sm">Passwoed:</span>
          <span>*********</span>
        </p>

        <button
          className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
          // onClick={handleLoginClick()}
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
        <button className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3">
          Sign up
        </button>
      </div>
    </Layout>
  );
}
export default SignIn;
