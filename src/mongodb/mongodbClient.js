const {
  MongoClient,
} = require('mongodb');

const {
  MONGODB_USERNAME,
  MONGODB_PASSWORD,
  MONGODB_DB,
} = process.env;

const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@mon-vieux-grimoire.alewp2q.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;

const mongodbClient = new MongoClient(uri);
let mongodb = null;

console.log('[+] Connecting to DB...');
(async () => {
  await mongodbClient.connect();
})();
console.log('[✔] Connected to DB !');

exports.mongodbClient = mongodbClient;
