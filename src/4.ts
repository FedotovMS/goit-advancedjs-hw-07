class Key {
  private readonly signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}


class Person {
  private readonly key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}


abstract class House {
  protected tenants: Person[] = [];

  protected constructor(
    protected door: boolean,
    protected key: Key,
  ) {}

  abstract openDoor(key: Key): void;

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Welcome home!");
    } else {
      console.log("The door is closed. Nobody can enter.");
    }
  }
}


class MyHouse extends House {
  constructor(key: Key) {
    super(false, key);
  }

  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is open.");
    } else {
      console.log("Invalid key. The door is closed.");
    }
  }
}


const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};