//keys can either be string or they can be symbols
let id1 = Symbol("description of id");
let id2 = Symbol("description of id");
let id3 = Symbol.for("description of id");
let id4 = Symbol.for("description of id");

alert(id1 === id2); // false
alert(id2 === id3); // false
alert(id1 === id3); // false
alert(id3 === id4); // true
alert(Symbol.keyFor(id3)); //description of id

let id = Symbol("id");
let user = {
        name: "John",
        [id]: 123  //not "id": 123
};

//for .. in loop always skips symbols
//Object.keys() also skips symbols

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");
alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
alert( Symbol.keyFor(localSymbol) ); // undefined, not global


Symbols have two main use cases:

1) “Hidden” object properties.
    If we want to add a property into an object that “belongs” to another script or a library, we can create a symbol and use it as a
    property key. A symbolic property does not appear in for..in, so it won’t be accidentally processed together with other properties.
    Also it won’t be accessed directly, because another script does not have our symbol. So the property will be protected from accidental
    use or overwrite. So we can “covertly” hide something into objects that we need, but others should not see, using symbolic properties.

2) There are many system symbols used by JavaScript which are accessible as Symbol.*. We can use them to alter some built-in behaviors. For
instance, later in the tutorial we’ll use Symbol.iterator for iterables, Symbol.toPrimitive to setup object-to-primitive conversion and so
on.

Technically, symbols are not 100% hidden. There is a built-in method Object.getOwnPropertySymbols(obj) that allows us to get all symbols.
Also there is a method named Reflect.ownKeys(obj) that returns all keys of an object including symbolic ones. But most libraries,
built-in functions and syntax constructs don’t use these methods.
