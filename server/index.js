import express from "express";
import routes from "./src/routes/routes.js";
import rateLimit from "express-rate-limit";
import setupSwagger from "./swagger.js";

const app = express();

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after an hour.",
});

// app.use(limiter);
app.use(express.json());
app.use("/api", routes);

// Set up Swagger at /api-docs
setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
