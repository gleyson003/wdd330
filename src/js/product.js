import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import { setLocalStorage, getParams } from './utils.mjs';


const dataSource = new ProductData("tents");

const productId = getParams('product');
const product = new ProductDetails(productId, dataSource);
product.init();

function addProductToCart(product) {
  setLocalStorage("so-cart", product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
