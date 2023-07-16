import { connectToDatabase } from "../../../../utils/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { method } = req;

  // Only handle PUT requests
  if (method !== "PUT") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { productId } = req.query;
  if (!productId) {
    res.status(400).json({ message: "Product ID is required" });
    return;
  }

  try {
    const { db } = await connectToDatabase();
    const collection = db.collection("products");

    // Convert the productId to ObjectId
    const objectId = new ObjectId(productId);

    // Find the product by ID
    const product = await collection.findOne({ _id: objectId });

    if (product) {
      console.log("product found with id ",product)
    }
    else{
      console.log("product notfound")
      res.status(404).json({ message: "Product not found" });
      return;
    }

    // Update the product rating
    const updatedProduct = await collection.updateOne(
      { _id: objectId },
      { $set: { rating: parseInt(product.rating+1) } }
      );
      
      console.log("product updated", updatedProduct)
      res.status(200).json(updatedProduct.value);
    } catch (error) {
    console.log("product failed")
    console.error("Failed to update product rating:", error);
    res.status(500).json({ message: "Failed to update product rating" });
  }
}
