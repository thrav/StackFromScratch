// @flow

class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark(): string {
    return `Bark bark, I am ${this.name}`;
  }

  barkInConsole() {
    /* eslint-disable no-console */
    console.log(this.bark());
    /* eslint-enable no-console */
  }
}

export default Dog;
