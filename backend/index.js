import dotenv from "dotenv";
import connectDB from "./src/connection/db.js";
import { app } from "./src/app.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR in Express App: ", error);
      throw error;
    });
    app.listen(PORT, () => {
      console.log(`Server is running at port : http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mango DB localHost connection failed !!! ", err);
  });
