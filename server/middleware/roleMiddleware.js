// roleMiddleware.js
const jwt = require('jsonwebtoken');

function roleMiddleware(requiredRoles = []) {
  return (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Attach the decoded token to req.user

      // Check if the user's role is in the required roles or if they are an admin
      if (!requiredRoles.includes(decoded.role) && decoded.role !== 'admin') {
        return res.status(403).json({ msg: 'Access denied' });
      }

      // Proceed to the next middleware or route handler
      next();
    } catch (err) {
      return res.status(401).json({ msg: 'Invalid token' });
    }
  };
}

module.exports = roleMiddleware;
