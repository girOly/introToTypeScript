class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

const greeter = function(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
};

let user = { firstName: "Lauren", lastName: "Ipsum" };
document.body.textContent = greeter(user);
