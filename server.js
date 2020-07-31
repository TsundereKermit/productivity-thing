const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//Body-parser middleware
app.use(bodyParser.json());

// MongoDB URI
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser:true, useUnifiedTopology:true })
    .then(() => console.log("MongoDB Connected."))
    .catch(err => console.error(err));

//Use routes
app.use("/", require("./routes/api/sticky.js"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
