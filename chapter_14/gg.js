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

function Marksheet(a, b, c, d, e, f){
    this.a = a
    this.b = b
    this.c = c
    this.d = d
    this.e = e
    this.f = f
}

Marksheet.prototype.grade = function(){
    console.log("Mark of " + this.a + " is " + this.x)
    console.log("Mark of " + this.b + " is " + this.y)
    console.log("Mark of " + this.c + " is " + this.z)
    console.log("Mark of " + this.d + " is " + this.m)
    console.log("Mark of " + this.e + " is " + this.n)
    console.log("Mark of " + this.f + " is " + this.o)
}

function Subject(bangla, english, math, accounting, management, marketing, a, b, c, d, e, f){
    this.x = bangla
    this.y = english
    this.z = math
    this.m = accounting
    this.n = management
    this.o = marketing
    Marksheet.call(this, a, b, c, d, e, f)
}
Extend(Marksheet, Subject)
Subject.prototype.publish = function(){
    this.grade()
    console.log("Total " +(this.x + this.y + this.z + this.m + this.n + this.o) + " mark")
}

var delower =new Subject(20, 30, 40, 50, 60,70, "Bangla", "English", "Math", "Accounting", "Management", "Marketing")

delower.publish()