import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
// Middleware to parse JSON
app.use(express.json());
// GET route - returns a random fact
app.get('/api/random-fact', (req, res) => {
    const facts = [
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old!",
        "A group of flamingos is called a 'flamboyance'",
        "Bananas are berries, but strawberries aren't",
        "The shortest war in history lasted only 38-45 minutes",
        "Octopuses have three hearts"
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    res.json({
        success: true,
        fact: randomFact,
        timestamp: new Date().toISOString()
    });
});
// POST route - generates a random greeting for the provided name
app.post('/api/greeting', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({
            success: false,
            error: "Name is required"
        });
    }
    const greetings = [
        `Hello there, ${name}! Hope you're having a fantastic day!`,
        `Greetings, ${name}! Welcome to our awesome API!`,
        `Hey ${name}! You're looking great today!`,
        `What's up, ${name}? Ready for some fun?`,
        `Hi ${name}! Thanks for visiting our API!`
    ];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    const luckyNumber = Math.floor(Math.random() * 100) + 1;
    res.json({
        success: true,
        greeting: randomGreeting,
        luckyNumber: luckyNumber,
        timestamp: new Date().toISOString()
    });
});
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});
//# sourceMappingURL=index.js.map