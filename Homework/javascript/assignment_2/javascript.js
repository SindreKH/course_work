/*
------------------------------------
!READ THE ASSIGNMENT TEXT CAREFULLY!
------------------------------------
Feel free to ask me, Joe or your fellow students if you're stuck 😊

1.

Use a normal for loop to loop over the people array and do the following:

- Make a new key on each person object in the array called "city" and set the value to a random city 
	from the cities array.

- Make a new key on each person object called "title" and set it to "Mr." for males and "Ms." for females.
	
- Increment the age by 1

- Add "coding" to the hobby array on each object.

PS: Use only 1 loop to do the above steps.

console.log(people) after your loop to check that your changes are correct.

*/

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
	{
		name: "Thomas",
		male: true,
		age: 23,
		hobbies: ["cycling", "football", "pool"]
	},
	{
		name: "Susan",
		male: false,
		age: 26,
		hobbies: ["jogging", "travelling", "dancing"]
	},
	{
		name: "Monica",
		male: false,
		age: 21,
		hobbies: ["skateboarding", "guitar", "concerts"]
	},
	{
		name: "Avery",
		male: true,
		age: 28,
		hobbies: ["writing", "games", "memes"]
	},
	{
		name: "Phillip",
		male: true,
		age: 24,
		hobbies: ["boxing", "wrestling", "mma"]
	},
	{
		name: "Otto",
		male: true,
		age: 36,
		hobbies: ["movies", "cinema", "music"]
	},
	{
		name: "Annabelle",
		male: false,
		age: 30,
		hobbies: ["makeup", "fashion", "shopping"]
	},
	{
		name: "Cathy",
		male: false,
		age: 18,
		hobbies: ["design", "drawing", "css"]
	}
];

/*
2.

Write a function called diceRoller that takes in 1 number as a parameter.

The function should return an array of random numbers between 1 and 6, the length of
the array is decided by the number the function receives as a parameter (think of it
as the number of dice we roll)

Examples: 
console.log(diceRoller(4)) should console log something like: [4, 1, 2, 6]
console.log(diceRoller(6)) should console log something like: [5, 5, 6, 2, 3, 4]
*/

/*
3.

Write a loop that loops over the wordArr array, and does the following:
- Removes whitespace from the beginning and end of each word
- Converts all the words to lower case

Use a normal FOR loop.

After the loop, use a method to join the array into a string with a single space between
the words (" "), then console.log the final string.

It should look like this: "this text needs to be cleaned up"
*/
const wordArr = [" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"];
