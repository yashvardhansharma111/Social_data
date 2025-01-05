import { DataAPIClient } from "@datastax/astra-db-ts";
import { config } from "dotenv";

config({
  path: "./.env",
});

const Token = process.env.Token;

if (!Token) {
  throw new Error("Token is not defined. Please set the 'Token' environment variable in .env");
}

const client = new DataAPIClient(Token);

const db = client.db(
  "https://95973b06-bb15-494a-ae60-550719b1c7c1-us-east-2.apps.astra.datastax.com",
  { keyspace: "default_keyspace" }
);

export default db;
