import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import messageRouter from "./router/messageRouter.js";


const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.REACT_APP_API_URL],
    methods: ["POST","DELETE","GET"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
  res.json({
    success:true,
    message:"successful",
  });
});


app.use("/api/v1", messageRouter);


mongoose
  .connect(process.env.MONGO_URI, { dbName: "MERN_STACK_EVENT_MESSAGE" })
  .then(() => {

  console.log("Connected to database!");
})


app.listen(process.env.PORT, () => {
console.log(`Server listening at port ${process.env.PORT}`);
});

export default app;