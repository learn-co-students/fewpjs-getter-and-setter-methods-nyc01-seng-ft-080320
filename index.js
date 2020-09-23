// Add your Circle class here

class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get radius () {
        return this._radius;
    }
    set diameter(diameter) {
        this._radius = diameter / 2;
    }
    get diameter() {
        return 2 * this._radius;
    }

    set circumference(c) {
        this._radius =  (c / Math.PI) / 2;
    }

    get circumference() {
        return this.diameter * Math.PI;
    }

    set area(cuckaloo) {
        this._radius = Math.sqrt((cuckaloo / Math.PI));
    }

    get area() {
        return (this.radius ** 2)  * Math.PI;
    }

}