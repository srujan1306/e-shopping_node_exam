import { Products } from "../entities/products.entity.js";
async function getProducts() {
  return await Products.scan.go();
}
async function createProduct(data) {
  return await Products.create(data).go();
}
async function deleteProductById(id) {
  await Products.delete({ productId: id }).go();
}

async function editProductById(ExistingData, UpdatedData) {
  return await Products.put({ ...ExistingData.data, ...UpdatedData }).go();
}
export { getProducts, createProduct, deleteProductById, editProductById };
