const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Docker + Jenkins Mini Project Success!</h1><p>The pipeline works perfectly.</p>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});