const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();
app.use(express.json())
app.use(cookieParser())



const PORT = process.env.PORT || 5000;

//Routes
app.get("/",(req,res) =>{
  res.status(200).json({
    sucess:"true",
    message:"Server is running fine and good",
  });
});

app.use("/products",productRoutes)

app.use("/auth", authRoutes)

app.use("/cart", cartRoutes)

//MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
  
