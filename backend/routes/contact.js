// backend/routes/contact.js
// Contact form handling
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { sendEmail } = require('../utils/email');

router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    
    // Send notification email
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission',
      text: `New message from ${contact.name} (${contact.email}): ${contact.message}`
    });
    
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
