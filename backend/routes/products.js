import express from "express"
import { addProduct, deleteProduct, getProduct, getProductsDetails, updateProduct } from "../controllers/productControllers.js"

const router = express.Router()

router.get("/mehsullar",getProduct)
router.get("/mehsullar/:id",getProductsDetails)
router.post("/admin/new",addProduct)
router.delete("/admin/delete/:id",deleteProduct)
router.put("/admin/edit/:id",updateProduct)

export default router