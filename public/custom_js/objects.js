(function(){
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */
    var person = {};

    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */
     person.firstName = "Daniel";
     person.lastName = "Rojo";

    //  console.log(person.firstName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */
     person.sayHello = function(){
       return "Hello from " + person.firstName + "!";
     }
    console.log(person.sayHello());
    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function(shoppers){
      console.log("The Shopper is " + shoppers.name + " and their total amount is " + shoppers.amount );
    });

    // todo:
// Create an array of objects that represent books.
var books  = [
    {
      title: "Harry Potter",
      author: {
        firstName: "Jk",
        lastName: "Rowling",
      }
    },
    {
      title: "Bad Monkeys",
      author: {
        firstName: "Matt",
        lastName: "Ruff",
      }
    },
    {
      title: "The Orphan's Tale",
      author: {
        firstName: "Pam ",
        lastName: "Jenoff",
      }
    },
    {
      title: "Knowing God by Name",
      author: {
        firstName: "David Wilkerson",
        lastName: "Wilkerson",
      }
    },
    {
      title: "Grey",
      author: {
        firstName: "E L ",
        lastName: "Jamesk",
      }
    },
    {
      title: "Four Friends",
      author: {
        firstName: "Robyn",
        lastName: "Carr",
      }
    }
];
// Each book should have a title and an author property.
// The author property should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
// var books = [todo];

// log out the books array
console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
console.log(books[1].author);
books.forEach(function(element,index,array){
    console.log("Book #" + index);
    console.log("Title: " + books[index].title);
    console.log("Author: " + books[index].author);
    console.log("---");
  });
// end loop here


})();
