import express from "express";
import {
  createProduct,
  deleteProducts,
  getProduct,
  getProducts,
  updateProducts,
} from "../controllers/productController.js";
import { notAllowed } from "../Utils/not Allowed.js";
import { fileCheck } from "../middleware/fileCheck.js";
import mongoose from "mongoose";

const router = express.Router();

router.param("id", (req, res, next, id) => {
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({
      message: "Invalid Product id!!",
    });
  req.productId = id;
  next();
});

router
  .route("/")
  .get(getProducts)
  .post(fileCheck, createProduct)
  .all(notAllowed);
router
  .route("/:id")
  .get(getProduct)
  .patch(updateProducts)
  .delete(deleteProducts);

export default router;
