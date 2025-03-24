function Animal() {
}
 
Animal.prototype.speak = function() {
  return console.log('Animal speaking');
  
};
 
function Dog() {
}
 
Dog.prototype = Object.create(Animal.prototype);
 
Dog.prototype.bark = function() {
  return  console.log("Woof!");
};
 
Dog.prototype.constructor = Dog;

let beagle = new Dog();
beagle.bark();
beagle.speak();
