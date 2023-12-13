// type fuel = 30 | 40 | 50 | 70 | 100;

// interface IVehicle<T extends engine> {
//   brandName: string;
//   modelName: string;
//   year: number;
//   fuelCapacity: fuel;
//   currentFuel: number;
//   milliage: number;
//   fuelFor1Km: number;
//   engineType: T;
//   vehicleType: vehicleT;
//   getInfo: () => void;
//   drive: () => number;
// }

// enum engine {
//   dohc = "dohc",
//   v_twin = "v-twin",
// }

// enum vehicleT {
//   car = "car",
//   motocycle = "motocycle",
// }

// class Car implements IVehicle<engine.dohc> {
//   vehicleType: vehicleT = vehicleT.car;
//   brandName: string;
//   modelName: string;
//   year: number;
//   fuelCapacity: fuel;
//   currentFuel: number;
//   milliage: number;
//   fuelFor1Km: number;

//   vehicleType: vehicleT;
//   constructor(
//     brandName: string,
//     modelName: string,
//     year: number,
//     fuelCapacity: fuel,
//     currentFuel: number,
//     milliage: number ,
//     fuelFor1Km: number,
//     vehicleType: vehicleT = vehicleT.car
//   ) {
//     this.brandName = brandName;
//     this.modelName = modelName;
//     this.year = year;
//     this.fuelCapacity = fuelCapacity;
//     this.currentFuel = currentFuel;
//     this.milliage = milliage;
//     this.fuelFor1Km = fuelFor1Km;
//     this.fuelCapacity = fuelCapacity;

//   }
//   getInfo: () => void;
// }

interface IAnimal {
  name: string;
  age: number;
  getInfo: () => void;
}

abstract class Animal implements IAnimal {
  readonly name: string;
  protected _age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this._age = age;
  }
  getInfo(): void {
    console.log("Animal's Info:", "name-" + this.name, "age-" + this.age);
  }

  get age(): number {
    return this._age;
  }
}

enum place {
  river = "river",
  ocean = "ocean",
  sea = "sea",
}

interface IBird {
  fly: () => void;
  wingColor: "black" | "white" | "grey";
}

type killType = string | string[];

interface IKill<T extends killType> {
  kill: T;
}

interface IFish extends IKill<killType> {
  swim: () => void;
  livePlace: place;
}

class Bird extends Animal implements IBird {
  wingColor: "black" | "white" | "grey";

  constructor(
    name: string,
    age: number,
    wingColor: "black" | "white" | "grey"
  ) {
    super(name, age);
    this.wingColor = wingColor;
  }

  fly(): void {
    console.log(`${this.name} is flying.`);
  }
}

class Fish extends Animal implements IFish {
  livePlace: place;
  kill: killType;

  constructor(name: string, age: number, livePlace: place, kill: killType) {
    super(name, age);
    this.livePlace = livePlace;
    this.kill = kill;
  }

  swim(): void {
    console.log(`${this.name} is swimming in ${this.livePlace}.`);
  }
}

const bird = new Bird("sparrow", 8, "white");

bird.fly();
bird.getInfo();

const fish = new Fish("Blue Whale", 100, place.river, ["nemo"]);
fish.getInfo();
fish.swim();
console.log(fish.kill);
