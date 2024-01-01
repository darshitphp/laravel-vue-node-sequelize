const jwt = require('jsonwebtoken');
const axios = require('axios');

// const secretKey = 'your_secret_key'; // Replace with a strong secret key
const secretKey = 'kaU8VHzc21KuC90iA13GuVKyzBh92m5zTSbPB749GYfgldaE9ug9hN6Css1uTer4';
const expiresIn = '1h'; // Token expiration time

// console.log(payload);
// const token = jwt.sign(payload, secretKey, { expiresIn });
const token = jwt.sign({ sub: '2', iss: 'Darshit Prajapati' }, secretKey, { expiresIn: '1h' });

console.log(token);
// Make an HTTP request to your Laravel backend
axios.get('http://www.laravel-vue.com/api/verify-token', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error('Error:', error.response.data);
});
