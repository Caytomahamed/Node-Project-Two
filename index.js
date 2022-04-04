// require your server and launch it
//import server
const server = require('./api/server.js');

const port = 4000;

server.listen(port, () => {
    console.log(`\n**** server Running on http://localhost:${port} ***\n`);
})

