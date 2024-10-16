// middleware/roleMiddleware.js
module.exports = function(allowedRoles) {
    return (req, res, next) => {
      const { role } = req.user;
  
      if (!allowedRoles.includes(role)) {
        return res.status(403).json({ msg: 'Access denied' });
      }
  
      next();
    };
  };
  