// const axios = require('axios');
// const jwt = require('jsonwebtoken');
// const AuthController = require('../controller/AuthController.js');

// const MyMiddleware = async (req, res, next) => {
//   try {
//     console.log(global.id);
//     const secretKey = 'kaU8VHzc21KuC90iA13GuVKyzBh92m5zTSbPB749GYfgldaE9ug9hN6Css1uTer4';
//     const expiresIn = '1h'; // Token expiration time
//     const token = jwt.sign({ sub: global.id, iss: global.username }, secretKey, { expiresIn: '1h' });
    
//     // Make an HTTP request to your Laravel backend
//     axios.get('http://www.laravel-vue.com/api/verify-token', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then(response => {
//       req.user = response.data; // Attach user data to the request object if needed
//       next(); // Move to the next middleware or route handler
//     })
//     .catch(error => {
//       res.status(401).json({ message: 'Unauthorized' });
//     });
//   } catch (error) {
//     // Handle errors (e.g., network issues, API errors)
//     console.error('Error:', error.message);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// module.exports = MyMiddleware;

const jwt = require('jsonwebtoken');
module.exports = function(req, res, next) {
  // const token = req.header('x-auth-token');
  const token = req.headers['x-auth-token'];
  console.log("MiddlewareToken: "+token);
  if (!token) return res.status(401).json({ msg: 'Access denied. No token provided.' });
  try {
    const decoded = jwt.verify(token, 'kaU8VHzc21KuC90iA13GuVKyzBh92m5zTSbPB749GYfgldaE9ug9hN6Css1uTer4');
    req.user = decoded.user;
    next();
  } catch (ex) {
    res.status(400).json({ msg: 'Invalid token.' });
  }
};