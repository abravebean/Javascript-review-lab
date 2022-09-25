/* How do we assign a value to a variable? using the = operator  const num = 2
How do we change the value of a variable? using the = operator  const num = 4
How do we assign an existing variable to a new variable? by using the = operator to the new varible numbers = num
Remind me, what are declare, assign, and define?Initialization of a value
What is pseudocoding and why should you do it? coding the main idea so you have a rough idea of what youre working with 
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 30%

*/




// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable  var firstVariable = 0
// Assign it the value of the string "Hello World" firstVariable= 'Hello World'
// Change the value of this variable to some number firstVariable = 0;
// Store the value of firstVariablein a new variable called secondVariable var secondVarialbe = firstVariable;
// Change the value of secondVariable to any string.   secondVariable = "Goodbye World"
// What is the value of firstVariable? var firstVariable = 0
var yourName ="Kevin Tran "
console.log ("Hello, my name is " + yourName)

 console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false == false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a*a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');
  let animal ="cow"
  if (animal === "cow") {
  console.log ("moooooo")
}else {
  console.log ("Hey! You are not a cow")
}
var age = 16
if (age >= 16){
  console.log ("here are the keys!")
} else if (age < 16){
  console.log("Sorry, you're too young")
}
for(let i=0 ;i<10; i++){
    console.log(i)
}
//  2. Write a loop that will print out all the numbers from 10 up to and including 400: 
let i = 10
while (i <= 400 ){
  console.log(i)
  i = i + 1
}
// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000 
let x = 12
while (x <= 4000){
  console.log(x)
  x = x + 3
}
//Print out the numbers that are within the range of 1 - 100
for(let i=1; i<=100;i++){
    console.log(i)
}

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for (let i = 0; i <=100; i++){
  if (i%2 === 0){
    console.log (i + " is an even number")
  }else console.log(i)
}

// 1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

for (let i = 0; i <= 100; i++){
  if ( i !== 0 && i%5 === 0){
     console.log (`I found a ${i}. High five!`)
   }
}
// 2.Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three


for (let i = 0; i <= 100; i++){
  if ( i !== 0 && i%5 === 0 && i%3 === 0) console.log 
    (`I found a number ${i}. High five! three is a crowd!`)
  if ( i !== 0 && i%5 === 0) console.log (`I found  number ${i}. High five!`)
  else if ( i !==0 && i%3 === 0) console.log(`I found number ${i}. three is a crowd!`)
}

// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.

let bank_account = 0 
let n = 0 
while (n <= 10){
  bank_account += n
  n +=1
}
console.log(`The total balance is $${bank_account}`)

// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
bank_account = 0 
n = 0
while (n <= 100){
  bank_account = bank_account + (n*2)
  n +=1
}
console.log(`The total balance is $${bank_account}`)
// What are the things in an array called? elements

// Do Arrays guarantee those things will be in order? no

// What real-life thing could you model with an array? a list of items

//1. Create an array that contains three quotes and store it in a variable called quotes

const quotes = ["LETS GOOO", "WE GOIT THISSS", "WE THE BESSTT"]
const randomThings = [1, 10, "Hello", true]
// 1. How do you access the 1st element in the array?
// randomThings[0]

// 2. Change the value of "Hello"to "World"
randomThings[2] = "World"

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)

// D. Change values 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// 1. What would you write to access the 3rd element of the array?
ourClass[2]

//Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat"

//Add a new element, "Cloud City" to the array
ourClass.push("Cloud city")
console.log (ourClass)

//E. Mix it up 
const myArray = [5, 10, 500, 20]

//1. 
myArray.push("Egon", "Mochi")

//2. 
myArray.shift(5)

//3. 
myArray.unshift("Bob Marely")

//4. 
myArray.pop() 

//5.  
myArray.reverse()
// .reverse() method changed the array by changing the order of elements. myArray has the elements in different order than before .reverse(). 

let num = 60

if (num < 100) console.log("little number")
else if (num >= 100) console.log ("big number")


//G. Monkey in the Middle
num = 9
if (num < 5) console.log ("little number")
else if (num > 10) console.log("big number")
else console.log("monkey")

//H. What's in Your Closet? 
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
]

//1. 
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!" )
//2. 
kristynsCloset.splice(6, 0, "raybans")
//3.
kristynsCloset[5] = "staind knit hat"
//4. 
thomsCloset[0][0]
//5. 
thomsCloset[1][1]
//6.
thomsCloset[2][2]
//7. 
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}!` )
//8. 
thomsCloset[1][2] = "Footie Pajamas"


//IV. Functions
//A. printGreeting

function printGreeting (name){
  return `Hello there, ${name}!`
}

//B. printCool

function printCool(name){
  return `${name} is cool`
}

//C. calculateCube

function calculateCube(num){
  return num **= 3
}

//D. isVowel
const vowels = ["a", "e", "i", "o", "u"]
function isVowel(char){
  char = char.toLowerCase()
  let answer = false;
  for (i=0; i< vowels.length; i++){
    if (char === vowels[i]) answer = true
  }
  return answer
}

// E. getTwoLengths
function getTwoLengths(str1, str2){
  const stringArr = [str1.length, str2.length]
  console.log(stringArr)
}
getTwoLengths("hello", "you")

// F. getMultipleLengths
arrOfNums = []
function getMultipleLengths(arr){
  for (let i = 0; i < arr.length; i++){
    arrOfNums.push(arr[i].length)     
  }
}
getMultipleLengths(["hello", "what", "is", "up", "dude"])
console.log(arrOfNums)

//G. maxOfThree
function maxOfThree (x, y, z){
  if (x === y && x === z) console.log(x)
    else if( x >= y && x >= z ) console.log(x)
    else if (y >= x && y >= z ) console.log(y)
    else if (z >= x && z >= y ) console.log(z)
  //else if ( x === y || x === z|| y === z)
}
maxOfThree(3, 1, 5)


//H. printLongestWord 
let longestStr = ''
function printLongestWord(arr){
  for (let i = 0; i < arr.length ; i++){
    if (arr[i].length >= longestStr.length) 
      longestStr = arr[i]     
  }
  console.log(longestStr)
  
}
printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"])

// Object
// A. Make a user object
const user = {
  name: "kevin tran", 
  email: "kevintran@gmail.com",
  age: 44, 
  purchased: []
}

// B. Update the user
//1.
user.email = "kevintran222@gmail.com"
//2.
user.age = ++(user.age)

// C. Adding keys and values 
user.location = "oklahoma city "

// D. Shopaholic! 
// 1. 
user.purchased.push("carbohydrates")

// 2. 
user.purchased.push("peace of mind")

// 3. 
user.purchased.push("Merino Jodhpurs")

// 4. 
console.log(user.purchased[2])

// E. Object-within-object
// 1. 
user.friend = {
  name: 'Emily coursen', 
  age: 17, 
  location: 'Ohio, niles', 
  purchased: []
}

// 2. 
console.log(user.friend.name)

// 3. 
console.log(user.friend.location)

// 4. 
user.friend.age = 22

// 5. 
user.friend.purchased.push("The One Ring")

// 6. 
user.friend.purchased.push("A latte")

// 7. 
console.log(user.friend.purchased[1])

// F. Loops
// 1. 
for (let i = 0; i < user.purchased.length; i++){
  console.log(user.purchased[i])
}

//2. 
for (let i = 0; i < user.friend.purchased.length; i++){
  console.log(user.friend.purchased[i])
}

// G. Functions can operate on objects
// 1.
function updateUser(){
  ++user.age
  user.name = user.name.toUpperCase()
}
updateUser()
console.log(user)

// 2. 
function oldAndLoud(person){
  ++person.age
  person.name = person.name.toUpperCase()
}

oldAndLoud(user)
console.log(user)