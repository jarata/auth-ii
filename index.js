const server = require('./api/server');
const port = process.env.PORT || 4567;
server.listen(port, () => console.log(`Server is running at http://localhost:${port}`));