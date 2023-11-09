//uri: mongodb+srv://muhammadadnan:<password>@cluster0.fvlusjk.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp
const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://muhammadadnan:abbottabad18@cluster0.fvlusjk.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

const client = new MongoClient(uri);

async function run() {
  const myDB = client.db("fruitsDB");
  const myColl = myDB.collection("list");
  /* --------------------------INSERT OPERATION----------------------------------------------

  try {
    const docs = [
      { _id: 3, color: "grapes" },
      { _id: 4, color: "pinapple" },
    ];

    const insertManyresult = await myColl.insertMany(docs);
    let ids = insertManyresult.insertedIds;

    console.log(`${insertManyresult.insertedCount} documents were inserted.`);
    for (let id of Object.values(ids)) {
      console.log(`Inserted a document with id ${id}`);
    }
  } catch (e) {
    console.log(
      `A MongoBulkWriteException occurred, but there are successfully processed documents.`
    );
    let ids = e.result.result.insertedIds;
    for (let id of Object.values(ids)) {
      console.log(`Processed a document with id ${id._id}`);
    }
    console.log(`Number of documents inserted: ${e.result.result.nInserted}`);
  }*/

  /*-------------------------------------------------READ OPERATION--------------------------------

    const cursor = myColl.find({});
    console.log("async");
    for await (const doc of cursor) {
      console.log(doc);
    }

    */
}
run().catch(console.dir);
