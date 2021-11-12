/* DATABASE_URL="mongodb://localhost/user" */
/* DATABASE_URL="mongodb+srv://invoice:faturasclone@cluster0.a7uku.mongodb.net/userInvoice?retryWrites=true&w=majority";
DATABASE_URL="mongodb+srv://invoice:faturasclone@cluster0.a7uku.mongodb.net/userInvoice?retryWrites=true&w=majority"; */







const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});

const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(process.env.DATABASE_URL, { useNewUrlParser: true });
client.connect(err => {
  const options = { w: "majority", readConcern: { level: "majority" } };
  const db = client.db("test", options);
});

















////implement Later
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://devteam:297720@cluster0.ybwd9.mongodb.net/invoicedataBase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


//orrrrrrr

////
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

let cachedDb;
let cachedClient;

if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local',
  );
}

if (!dbName) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local',
  );
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export default connectToDatabase;