class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Bark bark, I am ${this.name}`;
  }
}

module.exports = Dog;
