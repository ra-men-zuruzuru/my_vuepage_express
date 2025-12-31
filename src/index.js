"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var apiRoutes_js_1 = require("./routes/apiRoutes.js");
var app = (0, express_1.default)();
app.get('/api', function (_req, res) {
    apiRoutes_js_1.default;
});
app.get('/', function (_req, res) {
    console.log("getです");
});
exports.default = app;
