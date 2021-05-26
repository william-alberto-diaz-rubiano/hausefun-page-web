const functions = require("firebase-functions");
const admin = require("firebase-admin");

const express = require("express");
const cors=require("cors");

const app = express();

const serviceAccount = require("./hausefun-page-firebase-adminsdk-2mq7y-07d9cc1e31.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hausefun-page-default-rtdb.firebaseio.com",
});

app.use(cors({origin:true}))

app.get("/hello-world", (req, res) => {
  res.status(200).json({ Message: "hello word" });
});

//routes
app.use(require("./routes/gimnasios.routes"));
app.use(require("./routes/casasPerros.routes"));
exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
