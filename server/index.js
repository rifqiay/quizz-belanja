require("dotenv").config();
const express = require("express");
const createError = require("http-errors");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;
const mainRouter = require("./src/routes/index.routes");

app.use("/img", express.static("./upload"));
app.use(express.json());
app.use(
  cors({
    origin: process.env.URL_FRONTEND,
  })
);

app.use("/", mainRouter);

app.all("*", (req, res, next) => {
  next(new createError.NotFound());
});
app.use((err, req, res, next) => {
  const messageError = err.message || "internal server error";
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    message: messageError,
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
