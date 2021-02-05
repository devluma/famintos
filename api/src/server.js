const app = require('./app');

const PORT = process.env.NODE_PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
