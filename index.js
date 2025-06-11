const express = require("express");
require("dotenv").config();

const app = express();
const authRoutes = require("./routes/auth"); // 👉 Import the auth routes

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Use the auth routes
app.use("/api/auth", authRoutes); // 👈 All /register and /login will be under /api/auth

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
