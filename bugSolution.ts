function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(', ');
  }
}

let user = ["Jane User", "John User"];
console.log(greeter(user)); // Correct!

let user2 = "Jane User";
console.log(greeter(user2));//Correct!