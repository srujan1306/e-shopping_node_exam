import express from "express";
import {
  createCartCtr,
  getCartCtr,
  deleteCartCtr,
} from "../controllers/cart.controller.js";

const router = express.Router();

router.post("/createcart", createCartCtr);
router.get("/getcart/:id", getCartCtr);
router.delete("/deletecart/:id", deleteCartCtr);
export default router;
