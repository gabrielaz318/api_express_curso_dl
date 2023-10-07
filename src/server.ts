import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.send("Aplicação está funcionando!");
});

app.listen(3000, () => console.log("Server is running on PORT 3000"));
