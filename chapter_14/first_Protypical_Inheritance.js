var Adds = function(){

}
Adds.prototype = {
    jog: function(){
        console.log("total is " + (this.width + this.height))
    }
}

var Rectangles = function(width, height){
    this.width = width
    this.height = height
}
Rectangles.prototype = Object.create(Adds.prototype)

Rectangles.prototype.draw = function(){
        console.log("Width is " + this.width + " and \nheight is " + this.height)
        this.jog()
    }
var rect =new Rectangles(5,6)
rect.draw()
