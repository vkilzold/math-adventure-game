const express = require('express');
const app = express();
const port = 5000;

// Serve static files from 'public'
app.use(express.static('public'));

// Optional: test route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
