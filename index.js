import cors from "cors";
import productsRouter from "./routes/products.route.js";
import cartRouter from "./routes/cart.route.js";
import express from "express";
const app = express();

const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.use("/products", productsRouter);
app.use("/cart", cartRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

// request -> index.js -> Router -> Controller -> Service -> DB
