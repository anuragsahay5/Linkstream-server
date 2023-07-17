const express = require("express");
const router = express.Router();
const linklist = require("./modal");

router.get("/list", async (req, res) => {
  try {
    let response = await linklist.find().sort({_id:-1});
    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

router.post("/add", async (req, res) => {
  const addrs = req.body.addrs;
  try {
    let resp = await linklist.insertMany({ addrs });
    res.json("Done");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
