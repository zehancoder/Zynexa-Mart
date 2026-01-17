const loadShopData = async () => {
  const [beauty, fragrances, skinCare] = await Promise.all([
    fetch("https://dummyjson.com/products/category/beauty"),
    fetch("https://dummyjson.com/products/category/fragrances"),
    fetch("https://dummyjson.com/products/category/skin-care")
  ]);

  const beautyItem = await beauty.json();
  const fragrancesItem = await fragrances.json();
  const skinCareItem = await skinCare.json();

  return { beautyItem, fragrancesItem, skinCareItem };
};


export default loadShopData;