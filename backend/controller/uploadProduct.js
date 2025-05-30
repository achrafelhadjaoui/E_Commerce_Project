const uploadProductPermission = require("../helpers/permission");
const productModel = require("../models/productModel");

async function UploadProductController(req, res) {
  try {
    const sessionUserId = req.user.id;

    const hasPermission = await uploadProductPermission(sessionUserId); // ✅ await here

    if (!hasPermission) {
      return res.status(403).json({
        message: "Permission denied",
        error: true,
        success: false,
      });
    }

    const product = new productModel(req.body);
    const savedProduct = await product.save();

    res.status(201).json({
      message: "Product uploaded successfully",
      error: false,
      success: true,
      data: savedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
      error: true,
      success: false,
    });
  }
}

module.exports = UploadProductController;
