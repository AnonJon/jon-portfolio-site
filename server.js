const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.status(200).send("ok");
});

app.use("/api/users", require("./Routes/users"));

// Set static folder
app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));