const jwt = require('jsonwebtoken');

// Middleware to verify JWT and check for roles
function auth(requiredRole) {
  return (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Add the decoded token to the request object

      if (requiredRole && decoded.role !== requiredRole && decoded.role !== 'admin') {
        return res.status(403).json({ msg: 'Access denied' });
      }

      next();
    } catch (err) {
      res.status(401).json({ msg: 'Invalid token' });
    }
  };
}

module.exports = auth;
