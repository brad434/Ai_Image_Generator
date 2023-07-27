import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

//helps pull our variable from out .env file
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

//1)We have only one route to verify that our application works
app.get("/", async (req, res) => {
  res.send("Hello World!");
});

//2) Start our server and connected it to mongoDB with the import file called 'connectDB'
const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("Server is running on http://localhost:8080")
    );
  } catch (err) {
    console.log(err);
  }
};

startServer();
