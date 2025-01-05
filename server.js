const express = require('express');
const path = require('path');

const app = express();

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '1d' // Cache static assets for 1 day
}));

// Serve static files from the current directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
