const greeter = function(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
};

let user = { firstName: "Lauren", lastName: "Ipsum" };

interface Person {
  firstName: string;
  lastName: string;
}

document.body.textContent = greeter(user);
