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
exports.EagleRun = void 0;
var _6_class_eagle_ext_animal_1 = require("./6_class_eagle_ext_animal");
var EagleRun = /** @class */ (function (_super) {
    __extends(EagleRun, _super);
    function EagleRun(name, age) {
        // Memanggil constructor dari class induk (Eagle) dengan menyertakan nilai yang diperlukan
        return _super.call(this, name, age) || this;
    }
    EagleRun.prototype.runEagle = function (speed) {
        return this.run(speed);
    };
    return EagleRun;
}(_6_class_eagle_ext_animal_1.Eagle));
exports.EagleRun = EagleRun;
