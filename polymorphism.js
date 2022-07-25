function Extend(parent, child){
    child.prototype = Object.create(parent.prototype)
    child.prototype.constuctor = child
}

function Adds(color){
    this.color = color
}
Adds.prototype = {
    common: function(){
        console.log("total is " + (this.width + this.height))
    }
}

var s = new Adds("blue")
s.common()

function Rectangles(width, height, color){
    this.width = width
    this.height = height
    Adds.call(this, color)
}

Extend(Adds, Rectangles)
Rectangles.prototype.draw = function(){
        console.log("Width is " + this.width + " and \nheight is " + this.height)
        console.log(this.color)
    }

Rectangles.prototype.common = function(){
        console.log("this is the overide of rectengulars function")
    }
var rect =new Rectangles(5,6, "green")
rect.common()

function Circle(radius, color){
    Adds.call(this, color)
    this.radius = radius
}

Extend(Adds, Circle)
Circle.prototype.common = function(){
    console.log("i am a prototype of circle function. " + "radius is " + this.radius + "and color is" + this.color)
}

var cir = new Circle(4, "yellow")
cir.common()

var shapps = [s, rect, cir]
for (var i of shapps){
    i.common()
}
