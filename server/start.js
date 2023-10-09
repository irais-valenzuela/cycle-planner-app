// this will be db/index at some point once I add associations
const db = require("./db/db");
const PORT = 3045;
const app = require("./server");

db.sync() // sync our database
  .then(function () {
    console.log("Database synced, now starting our server!");
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}!`);
    }); // then start listening with our express server once we have synced
  })
  .catch(function (error) {
    console.error("Error syncing the database:", error);
  });
