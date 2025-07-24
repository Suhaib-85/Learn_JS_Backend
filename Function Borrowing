"use strict";
const person1 = {
  firstName: 'Alice',
  lastName: 'Smith',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

const person2 = {
  firstName: 'Bob',
  lastName: 'Brown'
};

// Borrow fullName method from person1
console.log(person1.fullName.call(person2));  // Output: Bob Brown

function introduce(language1, language2) {
  console.log(`${this.name} knows ${language1} and ${language2}`);
}
const developer = { name: 'Sana' };
introduce.apply(developer, ['JavaScript', 'Python']);	// Output: Sana knows JavaScript and Python
