import { connectToDatabase } from "../../utils/mongodb";
export default async function handler(req, res) {
    // Connect to the MongoDB database
    const { db } = await connectToDatabase();
    // Fetch the products from the database
    const products = await db.collection("products").find().toArray();
    // Return the fetched products as the API response
    res.status(200).json(products);
  }
  