const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let liveData = {
  result: "WAIT",
  confidence: 0,
  accuracy: 0
};

app.post("/update", (req, res) => {
  liveData = req.body;
  res.json({ status: "SUCCESS" });
});

app.get("/live", (req, res) => {
  res.json(liveData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});
