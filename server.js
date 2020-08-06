const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");

const app = express();

//Body-parser middleware
app.use(express.json());

// MongoDB URI
const db = config.get("mongoURI");

//Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected."))
  .catch((err) => console.error(err));

//Use routes
app.use("/", require("./routes/api/sticky.js"));
app.use("/", require("./routes/api/users.js"));
app.use("/", require("./routes/api/auth.js"));

//Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
