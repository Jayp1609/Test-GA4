import Product from "./product";
import { API_BASE_URL } from "@/config/constants";

async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function ProductServer() {
  let products = await productList();
  // console.log(products);
  console.log(process.env.SERVER_PASSWORD);
  return (
    <div>
      {process.env.NODE_ENV === "development" ? (
        <h1>You are on development mode</h1>
      ) : (
        <h1>You are on production mode</h1>
      )}
      {API_BASE_URL}
      <br />
      <br />
      ProductList server component
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h3> Name : {product.title}</h3>
            <Product price={product.price} />
          </div>
        );
      })}
    </div>
  );
}

// This function can only be used in server component

// export function generateMetadata({ param }) {
//   return {
//     title: "user page title",
//      description : "user page description"
//   };
// }
