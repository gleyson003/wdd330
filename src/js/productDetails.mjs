export default class ProductData {
    constructor(productId, dataSource) {
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;

        init(
            // add to cart button event handler
            async function addToCartHandler(e) {
                const product = await dataSource.findProductById(e.target.dataset.id);
                addProductToCart(product);
            }
        )

        renderProductDetails() 
    }

    getData() {
      return fetch(this.path)
        .then(convertToJson)
        .then((data) => data);
    }

    async findProductById(id) {
      const products = await this.getData();
      return products.find((item) => item.Id === id);
    }
  }