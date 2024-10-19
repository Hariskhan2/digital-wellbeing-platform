// routes/admin.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const roleMiddleware = require('../middleware/roleMiddleware');

// Only admins can access this route
router.get('/:id/dashboard', async (req, res) => {
  const { id } = req.params;

  try {
    // Find the user by ID
    const user = await User.findById(id);
    if (!user || user.role !== 'admin') {
      return res.status(404).json({ msg: 'User not found or not an admin' });
    }

    // Respond with the dashboard data for the admin user
    res.status(200).json({ msg: `Admin dashboard data for user ${id}` });
  } catch (error) {
    return res.status(500).json({ msg: 'Server error' });
  }
});

// Add staff or manager (admin only)
router.post('/add-user', async (req, res) => {
  const { name, email, password, role } = req.body;
  
  // Validate that the role is either 'staff' or 'manager'
  if (!['staff', 'manager'].includes(role)) {
    return res.status(400).json({ msg: 'Invalid role' });
  }

  try {
    const user = new User({ name, email, password, role });
    await user.save();
    return res.status(201).json({ msg: 'User added' });
  } catch (error) {
    return res.status(500).json({ msg: 'Server error' });
  }
});

// View all staff and managers (admin only)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({ role: { $in: ['staff', 'manager'] } });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
