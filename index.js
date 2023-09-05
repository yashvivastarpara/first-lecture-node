const express = require("express");
const connect = require("./database");
const schema = require("./schema");
const app = express();
const port = 9090;

app.use(express.json());

app.get("/",async (req, res) => {
  let data = await schema.find();
  res.send(data);
});

app.post("/login", async (req, res) => {
  await schema.create(req.body);
  res.send("login");
  console.log(req.body);
});

app.patch("/signup/:id", async (req, res) => {
  await schema.findByIdAndUpdate(req.params.id, req.body);
  console.log(req.params);
  console.log(req.body);
  res.send("signup");
});

app.delete("/delete/:id",async(req,res)=>{
  await schema.findByIdAndDelete(req.params.id);
  console.log("delete");
  console.log(req.params);
  res.send("delete")
})

app.listen(port, () => {
  console.log(`listining port ${port}`);
  connect();
});
