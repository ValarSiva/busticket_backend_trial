const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

//app.use(cors());

const frontendDomain = 'http://frontend-env-1.eba-usrrcxcp.ap-south-1.elasticbeanstalk.com';

const corsOptions = {
  origin: frontendDomain,
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  credentials: true, // Enable if your API uses cookies or other credentials
};

app.use(cors(corsOptions));

/*app.use(cors({
  origin: 'http://Frontend-env-1.eba-usrrcxcp.ap-south-1.elasticbeanstalk.com', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));*/
app.use(bodyParser.json());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
