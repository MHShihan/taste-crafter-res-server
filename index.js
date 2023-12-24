const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//MiddleWares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bistro boss in running");
});

app.listen(port, () => {
  console.log(`Bistro Boss app listening on port ${port}`);
});
