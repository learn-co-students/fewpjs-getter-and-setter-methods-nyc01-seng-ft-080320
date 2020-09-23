

class Circle {
    constructor (radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return (2 * Math.PI) * this.radius 
    }

    get area() {
        return Math.PI * this.radius * this.radius
    }

    set diameter(newDiameter) {
        this.radius = newDiameter/2
    }

    set circumference(newcircumference) {
        this.radius = newcircumference/(Math.PI * 2)
    }

    set area(newArea) {
        this.radius = newArea/(this.radius*this.radius*Math.PI)
    }
}

// let num = new Circle(4)

// console.log(num.diameter = 1)
// console.log(num.radius)