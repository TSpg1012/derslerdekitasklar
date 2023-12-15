// type fuel = 30 | 40 | 50 | 70 | 100;
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
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this._age = age;
    }
    Animal.prototype.getInfo = function () {
        console.log("Animal's Info:", "name-" + this.name, "age-" + this.age);
    };
    Object.defineProperty(Animal.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var place;
(function (place) {
    place["river"] = "river";
    place["ocean"] = "ocean";
    place["sea"] = "sea";
})(place || (place = {}));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age, wingColor) {
        var _this = _super.call(this, name, age) || this;
        _this.wingColor = wingColor;
        return _this;
    }
    Bird.prototype.fly = function () {
        console.log("".concat(this.name, " is flying."));
    };
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, age, livePlace, kill) {
        var _this = _super.call(this, name, age) || this;
        _this.livePlace = livePlace;
        _this.kill = kill;
        return _this;
    }
    Fish.prototype.swim = function () {
        console.log("".concat(this.name, " is swimming in ").concat(this.livePlace, "."));
    };
    return Fish;
}(Animal));
var bird = new Bird("sparrow", 8, "white");
bird.fly();
bird.getInfo();
var fish = new Fish("Blue Whale", 100, place.river, ["nemo"]);
fish.getInfo();
fish.swim();
console.log(fish.kill);
