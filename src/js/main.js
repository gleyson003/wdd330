import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import loadHeaderFooter from "./utils.mjs"; 
import productsListing from "./product-listing.js"; 

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList("Tents", dataSource, element);
const headerAndFooter = loadHeaderFooter.loadHeaderFooter();
const listingProducts = productsListing.loadHeaderFooter();


listing.init();
headerAndFooter.init();