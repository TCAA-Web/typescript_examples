// Arrays med simple værdier
let arrayOfNames: string[] = ["Elise", "Per"];
let arrayOfAge: number[] = [12, 33, 33];

// Array med union typer - strings eller numbers
let arrayOfLastname: Array<string | number> = ["Elise", "Per"];
arrayOfLastname.push(22);

// Nested arrays i typescript
let nestedArray: Array<Array<string>> = [
  ["Elise", "Per"],
  ["Jon", "Mia"],
];
