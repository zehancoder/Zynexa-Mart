const fetchAllProduct = async () => {
  const allProduct = await fetch("https://dummyjson.com/products?limit=194");
  const product = await allProduct.json();
  return { product };
};

export default fetchAllProduct;
