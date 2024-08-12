import { Products } from "../entities/products.entity.js";
import {
  getProducts,
  createProduct,
  deleteProductById,
  editProductById,
} from "../services/products.service.js";
async function getProductsCtr(request, response) {
  const allproducts = await getProducts();
  response.send(allproducts.data);
}
async function createProductByIdCtr(request, response) {
  const data = request.body;
  const addproduct = await createProduct(data);
  response.send(addproduct.data);
}
async function deleteProductByIdCtr(request, response) {
  const { id } = request.params;
  const product_to_deleted = await Products.get({ productId: id }).go();

  if (product_to_deleted.data) {
    await deleteProductById(id);
    response.send({
      msg: "product deleted successfully",
      data: product_to_deleted.data,
    });
  } else {
    response.status(404).send({ msg: "product not found" });
  }
}
async function editProductByIdCtr(request, response) {
  const { id } = request.params;
  const UpdatedData = request.body;
  const ExistingData = await Products.get({ productId: id }).go();
  if (ExistingData.data) {
    await editProductById(ExistingData, UpdatedData);
    response.send({
      msg: "product edited successfully",
      data: UpdatedData,
    });
  } else {
    response.status(404).send({ msg: "product not found" });
  }
}

export {
  getProductsCtr,
  createProductByIdCtr,
  deleteProductByIdCtr,
  editProductByIdCtr,
};
