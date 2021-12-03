let animal = function(name,weight) {
    this.name = name;
    this.weight = weight;
    this.setName = function(name) {
        this.name = name;
    }
    this.setWeight = function(weight) {
        this.weight = weight;
    }
    this.getName = function() {
        return this.name ; 
    }
    this.getWeight = function() {
        return this.weight ;
    }
    this.toString = function() {
        return `${this.name} ${this.weight}`;
    }
}
let objAnimal1 = new animal("Elephant",45.6);
let tostring1 = objAnimal1.toString();
console.log(tostring1);
let objAnimal2 = new animal("Crocodile",10);
objAnimal2.setName("mouse");
console.log(objAnimal2);
 