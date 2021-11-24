"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 8080; // default port to listen
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname + '/index.html'));
});
app.post("/create", (req, res) => {
    res.send("New Record Created");
});
app.post("/update", (req, res) => {
    res.send("New Record Updated");
});
app.get("/read", (req, res) => {
    res.send("New Record Readed");
});
app.get("/delete", (req, res) => {
    res.send("New Record Deleted");
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map