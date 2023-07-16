import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://somdeveloperqueries:hellohello@ecobliss.f3yspjb.mongodb.net/?retryWrites=true&w=majority"; // Replace with your MongoDB URI

export async function connectToDatabase() {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
    w: 'majority',
  });
  
  const db = client.db();

  return { client, db };
}
