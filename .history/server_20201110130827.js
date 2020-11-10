const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the ContactKeepers API" })
);

const PORT = process.env.PORT || 4949;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
