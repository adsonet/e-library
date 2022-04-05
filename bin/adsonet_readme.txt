mongodb+srv://adsonet:kHWXth5oVruydesx@cluster0.ixt0l.mongodb.net/local_library?retryWrites=true&w=majority



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://adsonet:<password>@cluster0.ixt0l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
