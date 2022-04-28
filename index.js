import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import routes from "./src/routes/routes";
const app = express();
const __dirname = path.resolve(path.dirname(""));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
