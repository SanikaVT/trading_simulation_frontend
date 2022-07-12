const http = require("http");
const app = require("./app");

const server = http.createServer(app);

const port = process.env.PORT || 5000;
// process.env.PORT
server.listen(port, () => {
    console.log(" Database Server has been started ");
});

