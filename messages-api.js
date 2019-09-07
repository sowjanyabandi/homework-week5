const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.post("/messages", (req, res) => {
  const msg = req.body;
  if (!msg || msg == "") {
    res.status(400).send({
      message: "Bad Request"
    });
  } else
    res.json({
      message: "message received loud and clear"
    });
});
app.listen(port, () => console.log("listening on port " + port));
