const db = require("./db/db");
const { User, MenstrualPhase } = require("./db/index");

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

    const menstrualPhaseSuggestions = await MenstrualPhase.create({
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
          "Pumpkin Seeds",
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
          "Career Research: Take this time to explore new career opportunities, courses, or certifications that can help you advance in your field.",
          "Professional Reading: Read books, articles, or research related to your career or industry. It's an excellent way to stay informed and inspired.",
          "Networking: Reach out to professional contacts or peers for virtual coffee chats or networking opportunities that don't require too much physical effort.",
          "Professional Development Events: If there are virtual webinars, conferences, or workshops related to your field, consider participating to stay updated and network with professionals.",
          "Resume or Portfolio Update: If you're considering a job change or advancement, work on updating your resume, LinkedIn profile, or professional portfolio.",
          "Goal Setting: Review your career goals and set actionable steps to achieve them. Use this time when your energy levels are up to plan and strategize.",
        ],
        selfCare: [
          "Journaling: Reflect on your career goals, accomplishments, and challenges. Write down your thoughts and feelings to gain clarity and set intentions for the month ahead.",
          "Self-Care Rituals: Indulge in self-care activities like taking a warm bath, practicing deep relaxation techniques, or reading a book that inspires and motivates you.",
          "Meditation and Mindfulness: Engage in daily meditation or mindfulness practices to reduce stress and increase focus. These practices can support your career development by improving mental clarity.",
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
