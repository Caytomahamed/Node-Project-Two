require("dotenv").config(); 
//must be at tobe

// require your server and launch it
//import server
const server = require('./api/server.js');

//DYNAMIC PORT HEROKUE ENVIRONMENT  => NPM I dotenv

const port = process.env.PORT || 9000;
  
//LOCAL ENVERONMENT
//PRODUCTION ENVERIONMENT
server.listen(port, () => {
    console.log(`\n**** server Running on http://localhost:${port} ***\n`);
})