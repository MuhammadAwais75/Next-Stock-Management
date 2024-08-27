import { NextResponse } from "next/server";
import { MongoClient,ServerApiVersion } from "mongodb";

export async function GET(request) {
  // const uri = "mongodb://awais123:yZE5Fck%21-SSTtby@cluster0-shard-00-00.pby8z.mongodb.net:27017,cluster0-shard-00-01.pby8z.mongodb.net:27017,cluster0-shard-00-02.pby8z.mongodb.net:27017/?ssl=true&replicaSet=atlas-12345-shard-0&authSource=admin&retryWrites=true&w=majority";

  const uri = "mongodb+srv://awais:awais123@inventory.edqni.mongodb.net/?retryWrites=true&w=majority&appName=Inventory";
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });

    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    const movie = await movies.findOne({ title: 'The Great Train Robbery'});
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return NextResponse.json(movie);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return NextResponse.json({ error: "Failed to fetch data from MongoDB" });
  } finally {
    await client.close();
  }
}
