const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://ahmedwaheedelmallah2:66lRKTrkakQxI3XL@ieee.xkbhtzt.mongodb.net/IEE?retryWrites=true&w=majority&appName=IEEE"
  )
  .catch((err) => console.log(err));

app.use(require("cors")());
app.use(express.json());
require("./routes")(app);

app.listen(5000);
// mongodb+srv://ahmedwaheedelmallah2:66lRKTrkakQxI3XL@ieee.xkbhtzt.mongodb.net/?retryWrites=true&w=majority&appName=IEEE
