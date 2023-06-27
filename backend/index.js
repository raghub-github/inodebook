const connectToMongo = require("./db");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

connectToMongo();
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNoutebook backend listening on port http://localhost:${port}`);
});
