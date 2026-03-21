class Cat {
  constructor(name) {
    this.name = name;
    this.leg = 4;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
  move() {
    console.log(`The cat is moving on ${this.leg} legs`)
  }
}

class Lion extends Cat{
  constructor(name, color) {
    super(name);// calling parent constructor using super keyword.
    this.color = color;
}

eat() {
  console.log(`${this.name} eats meat.`);
  }
  speak() {
    console.log(`${this.name} roars.`);
  }
}

let bilauta = new Cat('Bilauta');
bilauta.move();
bilauta.speak();

let simba = new Lion("Simba");
simba.move();
simba.speak();
simba.eat();
