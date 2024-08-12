import { Entity } from "electrodb"; //ORM
import { client } from "../util/dbconnection.js";
const Products = new Entity(
  {
    model: {
      entity: "Products",
      version: "1",
      service: "ProductService",
    },
    attributes: {
      productId: {
        type: "string",
        required: true,
      },
      name: {
        type: "string",
        required: true,
      },
      description: {
        type: "string",
        required: true,
      },
      price: {
        type: "number",
        required: true,
      },
      category: {
        type: "string",
        required: true,
      },
      stockQuantity: {
        type: "number",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["productId"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
    // add your DocumentClient and TableName as a second parameter
  },
  { client, table: "products" }
);

export { Products };
