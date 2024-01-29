"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minimalWithCheck2 = exports.minimalWithCheck = exports.minimal = void 0;
function minimal(a, b) {
    if (a <= b) {
        return a;
    }
    else {
        return b;
    }
}
exports.minimal = minimal;
function minimalWithCheck(a, b) {
    var min = Math.min(a, b);
    if (min === b) {
        console.log("Nilai yang dikembalikan adalah b");
    }
    else if (min === a) {
        console.log("Nilai yang dikembalikan adalah a");
    }
    return min;
}
exports.minimalWithCheck = minimalWithCheck;
function minimalWithCheck2(a, b) {
    var min2 = Math.min(a, b);
    if (min2 !== b) {
        console.log("Nilai yang dikembalikan adalah a");
    }
    else {
        console.log("Nilai yang dikembalikan adalah b");
    }
    return min2;
}
exports.minimalWithCheck2 = minimalWithCheck2;
