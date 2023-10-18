const db = require("./db/db");
const { User, MenstrualPhaseSuggestions, FollicularPhaseSuggestions } = require("./db/index");

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

    await MenstrualPhaseSuggestions.create({
      foods: {
        vegetables: [
          "Mushrooms",
          "Kale",
          "Beets",
          "Why: Mushrooms, kale, and beets are good foods for the menstrual phase because they provide essential nutrients like iron, calcium, and antioxidants that can help reduce fatigue, cramps, and inflammation while supporting overall health",
        ],
        fruits: [
          "Blueberries",
          "Strawberries",
          "Blackberries",
          "Bananas",
          "Why: Berries are rich in antioxidants and can help reduce inflammation and bloating and bananas a rich in potassium which can help with muscle cramps.",
        ],
        proteins: [
          "Salmon",
          "Mackerel",
          "Sardines",
          "Poultry",
          "Lean Beef",
          "Lentils",
          "Beans",
          "Chickpeas",
          "Tofu",
          "Why: Good sources of protein and omega-3 fatty fish can help reduce inflammation.",
        ],
        dietaryRestrictionProteins: [
          "Tofu",
          "Chickpeas",
          "Lentils",
          "Beans",
          "Quinoa",
          "Why: Excellent source of plant-based protein and iron.",
        ],
        grains: [
          "Brown Rice",
          "Whole Wheat Bread",
          "Oatmeal",
          "Why: Maintain stable energy levels and digestive health.",
        ],
        nuts: [
          "Almonds",
          "Sunflower seeds",
          "Chia seeds",
          "Why: Healthy fats, and protein.",
        ],
        other: [
          "Chamomile Tea",
          "Ginger Tea",
          "Tumeric Tea",
          "Greek Yogurt",
          "Why: Chamomile tea has soothing properties and Ginger and Tumeric help with inflammation and pain relief",
        ],
        disclaimer:
          "Remember that portion sizes and individual dietary preferences play a significant role in your food choices. It's important to maintain a balanced diet and adapt it to your specific needs and taste. Also, keep in mind that these dietary suggestions are general guidelines, and if you have specific dietary concerns, allergies, or health conditions, it's a good idea to consult a healthcare professional or a registered dietitian for personalized advice.",
      },
      fitness: {
        Day1ThroughDay2: [
          "Restorative Yoga",
          "Walking",
          "Breathing Exercises",
          "Light Stretching",
          "Why: These rest and gentle movement practices help reduce stress, relieve cramps, alleviate bloating, and overall relax.",
        ],
        Day3ThroughDay5: [
          "Strength Training",
          "Core Exercises",
          "Pilates",
          "Cardiovascular Exercises",
          "Why: These Low to Moderate Intensity Workouts boost mood and energy levels, alleviate back pain and abdominal pain, and reduce stress and promote relaxation.",
        ],
        disclaimer:
          "Remember that these are general suggestions, and it's essential to adjust the intensity and duration of your workouts based on your comfort and energy levels. Always listen to your body and avoid pushing yourself too hard. If you experience severe pain or discomfort during exercise, it's okay to take a break or rest. Additionally, if you have specific fitness goals or conditions, consider consulting with a fitness professional for a tailored workout plan.",
      },
      personalDevelopment: {
        careerDevelopment: [
          "Career Research",
          "Professional Reading",
          "Networking",
          "Professional Development Events",
          "Resume or Portfolio Update: If you're considering a job change or advancement, work on updating your resume, LinkedIn profile, or professional portfolio.",
          "Goal Setting: Review your career goals and set actionable steps to achieve them. Use this time when your energy levels are up to plan and strategize.",
        ],
        selfCare: [
          "Self-reflection",
          "Journaling",
          "Self-Care Rituals",
          "Meditation and Mindfulness",
        ],
        disclaimer:
          "Remember, personal development isn't just about career growth; it's also about self-care and well-being. Both aspects are interlinked, and taking care of yourself enhances your career potential. Adapt your personal development activities to what feels most fulfilling and appropriate for you during your menstrual cycle. Always prioritize self-care and listen to your body's signals.",
      },
    });

    await FollicularPhaseSuggestions.create({
      foods: {
        vegetables: [
          "Carrots",
          "Broccoli",
          "Sweet Potatoes",
          "Artichoke",
          "Zucchini",
          "Why: During your menstrual cycle, iron stores might have been depleted due to blood loss. In the follicular phase, it's crucial to replenish these stores to prevent anemia and maintain energy levels.  Beta-carotene helps protect cells and tissues from oxidative damage. It supports the growth of healthy reproductive tissues and aids in overall cell function and health.",
        ],
        fruits: [
          "Orange",
          "Grapefruit",
          "Lime",
          "Avocado",
          "Why: Vitamin C: These citrus fruits are rich in vitamin C, which is an antioxidant that supports immune function and helps the body absorb iron. This can be especially beneficial during the follicular phase to replenish iron levels after potential blood loss during menstruation.Healthy Fats: Avocado is a great source of healthy monounsaturated fats, which are beneficial for hormone regulation and overall health. Fiber: Avocado is also high in fiber, which can help regulate digestion and reduce bloating.",
        ],
        proteins: ["Skinless Chicken", "Lentils", "Trout", "Cod"],
        dietaryRestrictionProteins: ["Lentils", "Chickpeas"],
        grains: ["Oats", "Whole Wheat Bread"],
        nuts: ["Cashews", "Pumpkin Seeds"],
        other: [],
        disclaimer:
          "Remember that portion sizes and individual dietary preferences play a significant role in your food choices. It's important to maintain a balanced diet and adapt it to your specific needs and taste. Also, keep in mind that these dietary suggestions are general guidelines, and if you have specific dietary concerns, allergies, or health conditions, it's a good idea to consult a healthcare professional or a registered dietitian for personalized advice.",
      },
      fitness: {
        Day1ThroughDay3: ["Walking", "Swimming", "Cycling"],
        Day4ThroughDay7: ["Running", "Squats", "Dead-lifts", "Push-ups"],
        Day8ThroughDay10: ["HIIT Workouts", "Strength Training"],
        disclaimer:
          "Remember that these are general suggestions, and it's essential to adjust the intensity and duration of your workouts based on your comfort and energy levels. Always listen to your body and avoid pushing yourself too hard. If you experience severe pain or discomfort during exercise, it's okay to take a break or rest. Additionally, if you have specific fitness goals or conditions, consider consulting with a fitness professional for a tailored workout plan.",
      },
      personalDevelopment: {
        careerDevelopment: [
          "Take online courses",
          "Brainstorm",
          "Prepare",
          "Plan",
          "Research",
          "Set intentions for weeks to come",
          "Start new projects",
        ],
        selfCare: [
          "Meditation",
          "Listen to Inspirational Podcasts",
          "Quality time with loved ones",
        ],
        disclaimer:
          "Remember, personal development isn't just about career growth; it's also about self-care and well-being. Both aspects are interlinked, and taking care of yourself enhances your career potential. Adapt your personal development activities to what feels most fulfilling and appropriate for you during your menstrual cycle. Always prioritize self-care and listen to your body's signals.",
      },
    });

    console.log("🌲 Finished seeding the database!");
    await db.close();
  } catch (err) {
    console.error(err);
    await db.close();
  }
};

seed();
