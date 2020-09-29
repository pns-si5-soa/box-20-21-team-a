"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weatherService = ["Sunny", "Cloudy", "Rainy"];
function choice(tab) {
    return tab[Math.floor(Math.random() * Math.floor(tab.length))];
}
function default_1() {
    return choice(weatherService);
}
exports.default = default_1;
