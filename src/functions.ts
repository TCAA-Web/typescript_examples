// Vores user objekt vi tjekker "age" på.
let user = {
  age: 16,
  name: "Mario",
  address: "Streetname 122",
};

// Funktioner i Typescript
function verifyAge(user: { age: number; name: string; address: string }) {
  if (user.age >= 18) {
    return user.name + "is allowed";
  } else {
    return user.name + "is not allowed";
  }
}

verifyAge(user);
