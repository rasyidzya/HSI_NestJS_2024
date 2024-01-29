"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eagle = void 0;
var _4_class_animal_construct_1 = require("./4_class_animal_construct");
var Eagle = /** @class */ (function (_super) {
    __extends(Eagle, _super);
    function Eagle(name, age) {
        // Memanggil constructor dari class induk (Animal) dengan menyertakan nilai yang diperlukan
        var _this = _super.call(this, name, age, false) || this;
        // protected speed: number = 220;
        _this.speed = 220;
        return _this;
    }
    Eagle.prototype.fly = function () {
        return "".concat(this.name, " yang berumur ").concat(this.age, " sedang terbang!");
    };
    // protected run(speed: number): string {
    Eagle.prototype.run = function (speed) {
        return "".concat(this.name, " Berlari dengan kecepatan ").concat(speed, " km/h");
    };
    return Eagle;
}(_4_class_animal_construct_1.Animal));
exports.Eagle = Eagle;
