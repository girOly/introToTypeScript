var Student = /** @class */ (function() {
  function Student(firstName, middleInitial, lastName) {
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
  return Student;
})();
var greeter = function(person) {
  return "Hello, " + person.firstName + " " + person.lastName;
};
var user = { firstName: "Lauren", lastName: "Ipsum" };
document.body.textContent = greeter(user);
