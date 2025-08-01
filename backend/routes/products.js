import express from "express"
import { addProduct, deleteProduct, getProduct, getProductsDetails, updateProduct } from "../controllers/productControllers.js"
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js"

const router = express.Router()

router.get("/mehsullar",getProduct)
router.get("/mehsullar/:id",getProductsDetails)
router.post("/admin/new",isAuthenticatedUser,authorizeRoles('admin'), addProduct)
router.delete("/admin/delete/:id",isAuthenticatedUser, authorizeRoles('admin') ,  deleteProduct)
router.put("/admin/edit/:id",isAuthenticatedUser, authorizeRoles ('admin'),updateProduct)

export default router