const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
