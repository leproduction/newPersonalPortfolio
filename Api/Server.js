import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
dotenv.config();
// Initialize Express app
const app = express();
const port = process.env.PORT || 4000;

// Middleware

app.use(cors({
  origin: "https://personal-portfolio-qwpf.vercel.app",
  methods: ["POST","GET"],
  credentials: true
}));
app.use(express.json());
app.get("/",(req, res)=> {
  res.json("Information")
})
// Connect to MongoDB
async function connectToDB() {
  try {
    await mongoose.connect('mongodb+srv://portfolio:port@portfolio.rsdq3hc.mongodb.net/?retryWrites=true&w=majority'); // Changed variable name for clarity
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log("MongoDB connection error", error);
    process.exit(1);
  }
}
connectToDB();

// Define schema
const contactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  tel: { type: String, required: true },
});

// Create model
const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.post('/submitinformation', async (req, res) => {
  try {
    const newContact = new Contact({
      email: req.body.email,
      name: req.body.name,
      tel: req.body.tel
    });

    await newContact.save();

    console.log("Received contact information:", req.body);

    res.status(200).json({ message: "Submitted Successfully" });
  } catch (error) {
    console.error("Error submitting information", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});
