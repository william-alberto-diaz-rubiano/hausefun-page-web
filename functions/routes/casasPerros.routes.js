const {Router} = require("express");
const router = Router();

const admin = require("firebase-admin");
const db = admin.firestore();

// create
router.post("/api/casasPerros", async (req, res) => {
  try {
    await db
      .collection("casas-perros")
      .doc("/" + req.body.id + "/")
      .create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        picture:req.body.picture,
      });
    return res.status(200).json();
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/api/casasPerros/:casa_id", async (req, res) => {
  try {
    const doc = db.collection("casas-perros").doc(req.params.casa_id);
    const item = await doc.get();
    const response = item.data();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/api/casasPerros", async (req, res) => {
  try {
    let query = db.collection("casas-perros");
    const querySnapshot = await query.get();
    let docs = querySnapshot.docs;

    const response = docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      description: doc.data().description,
      price: doc.data().price,
      picture:doc.data().picture,
    }));

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.delete("/api/casasPerros/:casa_id", async (req, res) => {
  try {
    const doc = db.collection("casas-perros").doc(req.params.casa_id);
    await doc.delete();
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json();
  }
});

router.put("/api/casasPerros/:casa_id", async (req, res) => {
  try {
    const doc = db.collection("casas-perros").doc(req.params.casa_id);
    await doc.Update({
      description: req.body.description,
      price: req.body.price,
      picture:req.body.picture,
    });
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json();
  }
});

module.exports = router;