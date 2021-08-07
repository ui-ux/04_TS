let user: { name: string; age: number; logName: () => void; arr: string[] } = {
  name: "Name",
  age: 50,
  arr: ["a", "b"],
  logName(): void {
    console.log(this.name);
  },
};

type User = {
  name: string;
  age: number;
  logName: () => void;
  logName2?: () => void;
  arr: string[];
};
//  logName2?
//  optional field / method

let user2: User = {
  name: "Name",
  age: 50,
  arr: ["a", "b"],
  logName(): void {
    console.log(this.name);
  },
};

let user3: User = {
  name: "Name",
  age: 50,
  arr: ["a", "b"],
  logName(): void {
    console.log(this.name);
  },
  logName2(): void {
    console.log(this.name);
  },
};
