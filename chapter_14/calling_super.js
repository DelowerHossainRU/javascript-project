function Extend(parent, child){
    child.prototype = Object.create(parent.prototype)
    child.prototype.constuctor = child
}

var Adds = function(color){
    this.color = color
}
Adds.prototype = {
    jog: function(){
        console.log("total is " + (this.width + this.height))
    }
}

var Rectangles = function(width, height, color){
    this.width = width
    this.height = height
    Adds.call(this, color)
}
Extend(Adds, Rectangles)
Rectangles.prototype.draw = function(){
        console.log("Width is " + this.width + " and \nheight is " + this.height)
        console.log(this.color)
        this.jog()
    }
var rect =new Rectangles(5,6, "green")
rect.draw()


