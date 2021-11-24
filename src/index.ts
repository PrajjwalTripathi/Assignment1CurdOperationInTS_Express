import express from "express";
import path from "path";
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.sendFile(path.join(__dirname + '/index.html'));
} );
app.post( "/create", ( req, res ) => {
    res.send("New Record Created");
} );
app.post( "/update", ( req, res ) => {
    res.send("New Record Updated");
} );
app.get( "/read", ( req, res ) => {
    res.send("New Record Readed");
} );
app.get( "/delete", ( req, res ) => {
    res.send("New Record Deleted");
} );
// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );