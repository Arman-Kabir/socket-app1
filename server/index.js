const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);


expressServer.listen(3000, () => {
    console.log(`server is listening on port 3000`);
})