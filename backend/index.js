import { config } from "dotenv";
import db from "./db/index.js";

config({
  path: "./.env",
});

(async () => {
  try {
    const colls = await db.listCollections();
    console.log("Connected to AstraDB successfully! Collections:", colls);
  } catch (error) {
    console.error("Error connecting to AstraDB. Details:", error.message);
  }
})();
