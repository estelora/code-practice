//construct a vector with params x & y
function Vector(x, y) {
  this.x = x;
  this.y = y;
}

//call constructor function to return the sum of 2 vectors
Vector.prototype.sum(otherVector) {
 return new Vector(this.x + otherVector.x,
                   this.y + otherVector.y);
}

//call constructor function to return the difference between 2 vectors
Vector.prototype.difference(otherVector) {
 return new Vector(this.x - otherVector.x,
                   this.y - otherVector.y);
}

//get property length using Object.defineProperty(obj, propertyName)
Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x * this.x +
                     this.y * this.y);
  }
});


