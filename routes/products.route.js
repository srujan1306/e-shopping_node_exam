import express from "express";
import {
  getProductsCtr,
  createProductByIdCtr,
  deleteProductByIdCtr,
  editProductByIdCtr,
} from "../controllers/products.controller.js";

const router = express.Router();

router.get("/", getProductsCtr);
router.post("/addproduct", createProductByIdCtr);
router.delete("/deleteproduct/:id", deleteProductByIdCtr);
router.put("/editProduct/:id", editProductByIdCtr);

export default router;
