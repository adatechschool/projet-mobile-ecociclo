import express from "express";
import MarketAndRecycle from "../models/dataModels.js";
const router = express.Router();

// Get routes
router.get("/data", async (req, res) => {
    try {
        const allData = await MarketAndRecycle.find();
        res.json(allData);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve data" });
    }
});


// Post routes

router.post("/data", async (req, res) => {
  try {
    const store = new MarketAndRecycle(req.body); // Create a new MarketAndRecycle instance
    await store.save(); // Save to database
    res.status(201).json({ message: "Data added successfully", store });
  } catch (error) {
    res.status(400).json({ error: "Failed to add data" });
  }
});

export default router;
