const axios = require('axios');

const MyMiddleware = async (req, res, next) => {
  try {
    // Replace 'http://your-laravel-api.com' with the actual URL of your Laravel API
    const apiUrl = 'https://customweb.adorncommerce.com/get-active-user';
    
    // Make a request to the Laravel API to check user authentication
    const response = await axios.get(apiUrl, {
      withCredentials: true, // Include cookies in the request
    });
    console.log(response.data);
    // Check the response from the Laravel API
    if (response.data != null) {
      // User is authenticated, you can access the user data from response.data
      req.user = response.data; // Attach user data to the request object if needed
      next(); // Move to the next middleware or route handler
    } else {
      // User is not authenticated
      res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    // Handle errors (e.g., network issues, API errors)
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = MyMiddleware;
