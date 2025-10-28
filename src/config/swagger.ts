import swaggerJsDoc from "swagger-jsdoc";

const options: swaggerJsDoc.Options = {
  defination: {
    openapi: "3.0.0",
    info: {
      title: "Backend Blog API",
      version: "1.0.0",
      description: "API documentation for Backend Blog API",
    },
    servers: [
      {
        url: "https://localhost:3000",
      },
    ],
    componenst: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJsDoc(options);
export default swaggerSpec;
