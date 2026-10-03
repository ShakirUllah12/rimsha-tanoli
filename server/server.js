import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Rimsha Tanoli Portfolio Backend API is running smoothly.',
    timestamp: new Date().toISOString()
  });
});

// Contact API Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please fill in all required fields (name, email, and message).'
    });
  }

  // Log incoming message to server console
  console.log('--- New Recruiter Message Received ---');
  console.log(`From: ${name} (${email})`);
  console.log(`Subject: ${subject || 'No subject'}`);
  console.log(`Message: ${message}`);
  console.log('--------------------------------------');

  // Return success response to the React frontend
  return res.status(200).json({
    success: true,
    message: `Thank you, ${name}! Your message has been received. Rimsha will respond to ${email} promptly.`
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Rimsha Portfolio Backend API running on http://localhost:${PORT}`);
});
