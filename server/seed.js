const db = require("./db/db");
const { User } = require("./db/index");

const seed = async () => {
  try {
    await db.sync({ force: true }); // remove during production
    const yuri = await User.create({
      firstName: "Yuri",
      lastName: "Valenzuela",
      email: "yuri123@gmail.com",
      password: "Iamdog123",
      lastPeriodStartDate: "09/28/2023",
      dietaryRestrictions: ["Vegan", "Paleo"],
      getNotified: true,
    });

    const kirk = await User.create({
      firstName: "Kirk",
      lastName: "Valenzuela",
      email: "kirk123@gmail.com",
      password: "Iamcat123",
      lastPeriodStartDate: "09/28/2023",
      dietaryRestrictions: ["Vegan", "Paleo"],
      getNotified: true,
    });

    console.log("🌲 Finished seeding the database!");
    await db.close();
  } catch (err) {
    console.error(err);
    await db.close();
  }
};

seed();
