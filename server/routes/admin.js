// routes/admin.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const roleMiddleware = require('../middleware/roleMiddleware');

// Only admins can access these routes
router.use(roleMiddleware(['admin']));

// Add staff or manager
router.post('/add-user', async (req, res) => {
  const { name, email, password, role } = req.body;
  
  if (!['staff', 'manager'].includes(role)) {
    return res.status(400).json({ msg: 'Invalid role' });
  }

  try {
    const user = new User({ name, email, password, role });
    await user.save();
    res.status(201).json({ msg: 'User added' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// View all staff and managers
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({ role: { $in: ['staff', 'manager'] } });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
