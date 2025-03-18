import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pastebin API",
      version: "1.0.0",
      description: "API documentation for the decentralized Pastebin",
    },
    servers: [
      {
        url: "http://localhost:3000", // Change this in production
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Path to the route files where we add Swagger docs
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

function setupSwagger(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default setupSwagger;
