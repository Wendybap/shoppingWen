import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  return (
    <>
      <Layout>
        <div className="flex w-80 items-center justify-center relative mb-4">
          <h1 className="font-medium text-xl">Exclusive Products</h1>
        </div>
        <input
          type="text"
          placeholder="Search a product"
          className="border rounded-lg border-black w-80 p-4 mb-4 focus:outline-none"
          onChange={(e) => {
            context.setSearchByTitle(e.target.value);
          }}
        />
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {context.filteredItems.length > 0 ? (
            context.filteredItems.map((item) => (
              <Card key={item.id} data={item}></Card>
            ))
          ) : (
            <div>Sorry, product not found 😔</div>
          )}
        </div>
        <ProductDetail />
      </Layout>
    </>
  );
}
export default Home;
