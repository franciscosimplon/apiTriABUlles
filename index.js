const express = require('express');
const routes = require('./routes/routes');
const http = require('http')
const debug = require("debug");



const app = express();
app.use(express.json())
app.use('/', routes());
 app.listen(3001, () => {
    console.log(`server on port`, 3001)
});


const normalizePort = val => {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
};

/** Gestion des erreurs */
const onError = error => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

/** Server listener */
const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    debug("Listening on " + bind);
};

/** Define port */
const port = normalizePort(process.env.PORT || "3001");
app.set("port", port);
const server = http.createServer(app);

module.exports = server;