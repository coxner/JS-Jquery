# JS-Jquery

## What is a script?

A script is a series of instructions that the computer can follow in order to achieve a goal.

In programming each physical thing can be represented as an object. People may also refer to objects as instances.

Each object has its own properties

1.  Properties
2.  Events
3.  Methods

### Event

An event is a computers way of saying this just happened. Event driven programming is a paradigm in which the flow of the program is determined by events such as user interactions. IE mouse clicks or key presses.

### Method

Methods represent things people need to do with objects. They can do things like retreive or update a objects property.

| Event | Method        | Property |
| ----- | ------------- | -------- |
| book  | makeBooking() | bookings |

So as we can see from the table above the event book would call the method makeBooking() which would update the hotels bookings property.

Take a second to check out _basicGreeting.html_ is Js-Basics. The things youll notice are...

1.  A new object is created with `var today = new Date();`
2.  To find the current hour of the day we use `var hourNow = today.getHours();`
3.  Next our script compares the current hour to preset hours of the day to determine the message outputted back to the user.
4.  `document.write('<h3>' + greeting + '</h3>');` displays the message to the user.

Lets look at the `document.write()` above. The document tag is a object. It represents the document in the document object model. The . represents the member operator which attaches known members of of a object. In most bases members take the roll of methods or properties. In the example above write is a method. So as you can see . attaches the method write to the object document which in turn displays a greeting message based on the time of day.

## More of the basics

Comments are key in any language. In Javascript we can add multi line comments within /\* \*/ and single line comments with //.

A script will temporarily store the bits of information it needs to do its job. It can store data in its variables. Data in a variable can change/vary every time a script runs.

### Declaring a variable

Declaring a variable is fairly simple in javascript. The syntax of it is `var_keyword var_name = var_value` so looking at this example `var quanity = 3`
In this example var is the variable keyword, quanity is the variable name and 3 is the variable value.

Changing the value of a variable is JS is fairly simple and straight forward. This can be seen in _changingVar.js_.

### Arrays

Javascript arrays can be defined as working with a list of items that have defined values. There are two different sets of ways to create arrays in javascript. The first way is by using a literal array which can be considered the preferred wain creating an array. An example is `var colors = ['purple', 'white', 'blue'];` A literal array uses [] brackets. The second way to create an array is by using the array constructor. It follows the syntax of `var colors = new Array ('purple', 'white', 'blue');`. The array literal is the preferred way of creating a array.

### Manipulating Arrays

In javascript the first index of an array is 0 as it is in most languages. To access the second value (blue) from the colors array we use `color[1]`. To change the second value of the colors array we can use `colors[1] = "red"`. Both of these can be seen in _arrays.html_ and _arrays.js_.

### Operators

Types of operators:

* Assignment operators: Assign a value to a variable. ie: =

* Arithmetic operators: perform basic math. ie: \*, +, -, /, ++, --, %

* Strong operators: Combine two strings. ie: "Me" + "You"

* Comparison operator: Compare two values and returns true or false. ie: 3 > 5 returns false

* Logical operators: combines expressions returning true or false:
