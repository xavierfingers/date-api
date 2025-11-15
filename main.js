const express = require('express');
const app = express();
const port = 3000;
const date = new Date();
app.use(express.json());
app.get("/", (req, res)=> {
  console.log("Client connected!");
   res.status(200)
    .set("Content-Type", "text/html")
    .send("Date: "  + date.toString());
});
app.listen(port, ()=> {
console.log("Server running at localhost: " + port);
});
