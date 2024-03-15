// console.log("hello world");
// const myFavNumber:number=343
// console.log(myFavNumber.toLocaleString());
// let nameA=NaN
// console.log(nameA);
//-----------------------------------------------//
//2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// let personName:string='Eric'
// console.log(` Hello ${personName}, would you like to learn some Python today?`);
//------------------------------------------------------//
//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let personName="dayyan";
// console.log("Lowercase",personName.toLowerCase());
// console.log("Uppercase",personName.toLocaleUpperCase());
// console.log("Titlecase",personName.replace(/\bw/g,c =>c.toUpperCase()));
//------------------------------------------------------------//
//4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// let author:string="Albert Einstein"
// let quote:string="A person who never made a mistake never tried anything new"
// console.log(`${author}  once said,"${quote}."`);
//----------------------------------------------------//
//5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// let famous_persons:string="Quaid-e-azam"
// let messege:string="With faith, discipline, and selfless devotion to duty, there is nothing worthwhile that you cannot achieve."
// console.log(`${famous_persons}  once said,"${messege}."`);
//---------------------------------------//
// 6.Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// let original_Name:string="\t    Muhammad Dayyan   \n";
// console.log(original_Name);
// let stripping_Name:string=original_Name
// console.log(stripping_Name);
//--------------------------------------------//
//7.Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// let addition:number=5+3;
// let subtraction:number=10-2;
// let multiplication:number=4*2;
// let division:number=16/2
// console.log(`Addition:5+3=${addition}`);
// console.log(`subtraction:10-2=${subtraction}`);
// console.log(`multiplication:4*2=${multiplication}`);
// console.log(`division:16/8=${division}`);
//--------------------------------------------//
// 8.You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
// console.log(5+3);
// console.log(5+3);
// console.log(5+3);
// console.log(5+3);
//-----------------------------------------------------//
// 9.Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// let msg:string="My Favourite number is"
// let favNumber:number=7
// console.log(`${msg} ${favNumber}`);
// 10.Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// let myName:string="Muhammad Dayyan Anwar";
// let named=new Date()
// // first program
// function add(num1,num2){
// return num1+num2
// }
// let result=add(24,45)
// console.log(myName);
// console.log(named);
// let number1=24;
// let number2=45
// console.log( `The Number1 ${number1} and Number2 ${number2} add the answer is ${result} `)
// //second program
// let firstName="Muhammad Dayyan"
// let age=24;
// console.log(`Hello ${firstName} your age is ${age}`);
//-------------------------------------//
//11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// const  name:string[]=["ali","basit","umar","akbar","sulaman"]
// name.forEach((name) => {
//   console.log(name);
// });
//------------------------------------//
// 12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// const  name1:string[]=["ali","basit","umar","akbar","sulaman"]
// name1.forEach((name1)=>{
//   console.log(`Hello, ${name1} Have a great day!`);
// })
//----------------------------------//
// 13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// const  vehicles:string[]=["plan","car","bike","areoplan","scooter"]
// vehicles.forEach((vehicles)=>{
//   console.log(`I would like to own a ${vehicles}.`);
// })
//----------------------------------//
// 14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// const  person:string[]=["quaid-e-azam,","Elon Musk,"," Albert Einstein,"]
// person.forEach((person)=>{
//   console.log(`Dear ${person}`);
//   console.log("You are invited to join me for dinner. It would be an honor to have your company.");
//   console.log("-------------------------");
// })
//--------------------------------//
//15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// const  person1:string[]=["quaid-e-azam,","Elon Musk,"," Albert Einstein,"]
// person1.forEach((person1)=>{
//   console.log(`Dear ${person1}`);
//   console.log("You are invited to join me for dinner. It would be an honor to have your company.");
//   console.log("-------------------------");
// })
// let per=person1.splice(1,1,"Newton")
// console.log(`Unfortunately,${per} cannot make it to dinner.`);
// const  person2:string[]=["quaid-e-azam,","Newton,"," Albert Einstein,"]
// person2.forEach((person2)=>{
//   console.log(`Dear ${person2}`);
//   console.log("You are invited to join me for dinner. It would be an honor to have your company.");
//   console.log("-------------------------");
// })
//--------------------------------------------//
//16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// const  person:string[]=["quaid-e-azam,","Elon Musk,"," Albert Einstein,"]
// person.push("ali","haider","amna")
//  person.forEach((person)=>{
//    console.log("Good news! We found a bigger dinner table.");
//    console.log(`Dear ${person}`);
//   ;})
//-------------------------------------------------//
//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// const  person:string[]=["quaid-e-azam","Elon Musk"]
// console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");   
//   person.forEach((person)=>{  
//     console.log(`Sorry ${person}! We can't invite you to dinner.`);
//       ;})
//    person.splice(0,2)
//    person.splice(0,0,"ali,","dayyan,")
//    person.forEach((person)=>{
//     console.log(`Dear ${person} you're still invited to dinner!`);    
//    })
//         console.log("empty list=[]");
//---------------------------------------//
//18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.                                                                                                                           
// let cityName=["Karachi","Mumbai","Makkah","perth","london"]
// console.log(`Orginal Order:[${cityName}]`);
// let alp=cityName.sort()
// console.log(`Alphabetical Order: [${alp}]`);
// let cityName0=["Karachi","Mumbai","Makkah","perth","london"]
// console.log(`Orginal Order:[${cityName0}]`);
// let apl1=alp.reverse()
// console.log(`Reverse Alphabetical Order: [${alp}]`);
// let cityName1=["Karachi","Mumbai","Makkah","perth","london"]
// console.log(`Orginal Order:[${cityName1}]`);
// let alp2=cityName1.reverse()
// console.log(`Reverse Order:[${alp2}]`);
// let cityName2=["Karachi","Mumbai","Makkah","perth","london"]
// console.log(`Back to Original Order:[${cityName2}]`);
// console.log(`Sorted in Alphabetical Order: [${alp}]`);
// console.log(`Sorted in Reverse Alphabetical Order:[${cityName2}]`);
//------------------------------------//
//19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// const  person:string[]=["quaid-e-azam,","Elon Musk,"," Albert Einstein,"]
// let num:number=3
// console.log(`I have invited only ${num} person to dinner`);
//-----------------------------------//
// 20.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
//   let mounrains=["mountains", "rivers", "countries", "cities", "languages"]
// console.log(mounrains);
//-----------------------------------//
// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.        
// let obj:object={
//   "Category":"mountains",
//   "Category1" :"rivers",
//   "Category2":"countries",
//   "Category3":"cities",
//   "Category4":"languages"
// }
// console.log(obj);
//--------------------------------//
// 22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.          
// let arr=("car","bike","airplane")
// console.log(arr[5]);
//---------------------------//
// 23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(cargti  == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// let car='subaru';
//1 console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru')
//2 console.log("Is car == 'subaru'? I predict True.");
// console.log(car==="subaru");
//3 console.log("Is car == 'honda'? I predict false.");
// console.log(car=="honda");
//4 console.log("Is car == 'honda'? I predict false.");
// console.log(car==="honda");
//5 console.log("Is car == 'honda'? I predict true.");
// console.log(car !=="honda");
//6 console.log("Is car == 'honda'? I predict true.");
// console.log(car !="honda");
//7 console.log("Is car == 'subaru'? I predict true.");
// console.log(car >="subaru");
//8 console.log("Is car == 'subaru'? I predict true.");
// console.log(car <="subaru");
//9 console.log("Is car == 'Honda'? I predict false");
// console.log(car <="Honda");
//10 console.log("Is car == 'Honda'? I predict false");
// console.log(car >="Honda");
//------------------------------------//
//24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// let name:string="ali";
// let yourName:string="Muhammad Dayyan";
// let yourName1:string="ali"
// console.log("Is name == 'ali'? I predict true");
// console.log(name=="ali");
// console.log("Is name == 'dayyan'? I predict false");
// console.log(name=="dayyan");
// console.log("Is yourName == 'Muhammad Dayyan'? I predict true");
// console.log(yourName=="Muhammad Dayyan");
// console.log("Is yourName == yourName1? I predict false");
// console.log(yourName==yourName1);
// console.log("Is yourName !== yourName1? I predict true");
// console.log(yourName!=yourName1);
// let num1=24;
// let num2=54;
// console.log("Is num1 == num2 ? I predict false");
// console.log(num1==num2);
// console.log("Is num1 <= num2 ? I predict true");
// console.log(num1<=num2);
// console.log("Is num1 >= num2 ? I predict false");
// console.log(num1>=num2);
// console.log("Is num1 < num2 ? I predict true");
// console.log(num1<num2);
// console.log("Is num1 > num2 ? I predict false");
// console.log(num1>num2);
// console.log("Is num1 != num2 ? I predict true");
// console.log(num1!=num2);
// console.log("Is num1 != num2 ? I predict true");
// console.log(num1!=num2);
// let arr=[1,2,3,4,5]
// let include=3
// console.log(`It ${arr} ? its find in arr${arr.includes(include)}`);
// let arr1=[1,2,3,4,5]
// let include1=6
// console.log(`It ${arr} ? its not find in arr${arr.includes(include1)}`);
//--------------------------------//
//25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// let alien_color="green"
// if(alien_color=="green"){
//   console.log(" the player just earned 5 points.");
// }
//The version that fails will have no output.
// let alien_color="red"
// if(alien_color=="red"){
//   console.log("the player just earned 5 points.");
// }
//---------------------------//
//26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// let alien_color1="red"
// if(alien_color1=="red"){
//   console.log(" the player just earned 5 points.");
// }else {
//   console.log("the player just earned 10 points.");
// }
//-----------------------------//
//27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// let alien_color2="green"
// if(alien_color2=="green"){
//   console.log(" that the player earned 5 points.");
// }else if(alien_color2=="yellow"){
//   console.log(" that the player earned 10 points.");
// }else if(alien_color2=="red"){
//   console.log(" that the player earned 15 points.");
//   }
//-------------------------//
//28.Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
// let age=12; 
// if(age==2){
//   console.log("that the person is a baby.");
// }else if(age>2 && 4>age){
//   console.log("that the person is a toddler");
// }else if(age >4 && 13>age){
//   console.log("the person is a kid.");
// }else if(age >20 && age<65){
//   console.log("the person is a teenager.");
// }else if(age >=65){
// console.log("the person is an elder.");
// }
//-----------------------------//
//29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// let favorite_fruits=["apple","banana","mango"]
// console.log(favorite_fruits);
// if(favorite_fruits.includes("apple")){
// console.log("such as You really like apple!");
// }
// if(favorite_fruits.includes("banana")){
//   console.log("such as You really like banana!");
//   }
// if(favorite_fruits.includes("mango")){
//   console.log("such as You really like mango!");
//     }
//     if(favorite_fruits.includes("pineapple")){
//       console.log("such as You really like pineapple!");
//       }else{
//         console.log("You not like pineapple");
//      }
//         if(favorite_fruits.includes("waterMelon")){
//       console.log("such are as You really like water melon!");
//       }else{
//         console.log("You are not like water melon");
//         }
//-----------------------------//
// 30.Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// let userName=["ali","hussain","saud","meesam","sajjid"]
// userName.forEach((userName)=>{
// if(userName==="admin"){
//   console.log("Hello admin, would you like to see a status report?"); 
// }else{
//   console.log(`such as Hello ${userName}, thank you for logging in again.`);
// }})
//--------------------------------//
// 31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// let user=[]
// if(user.length===0){
//   console.log("We need to find some users!");
// }else{
//   console.log("There are users in the array.");
// }
//---------------------------//
// 32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// let current_users=["ali","hussain","saud","meesam","sajjid"]
// let new_users=["samad","sami","abbas","umar","javed"]
// new_users.forEach((new_users)=>{
//   if(current_users.includes(new_users)){
//     console.log(`the ${new_users} will need to enter a new username.`);
//   }else{
//     console.log(`that the ${new_users} is available.`);
//   }
// })
//--------------------------------//
// 33.Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// let numbers=[1,2,3,4,5,6,7,8,9]
// numbers.forEach((numbers)=>{
//   if(numbers==1){
//     console.log(`${numbers}st`);
//     }
//      else  if(numbers==2){
//       console.log(`${numbers}nd`);
//       }
//        else if(numbers==3){
//         console.log(`${numbers}rd`);
//         }
//     else if(numbers==4){
//           console.log(`${numbers}th`);
//           }
//            else if(numbers==5){
//             console.log(`${numbers}th`);
//             }
//              else if(numbers==6){
//               console.log(`${numbers}th`);
//               } else if(numbers==7){
//                 console.log(`${numbers}th`);
//                 }else if(numbers==8){
//                   console.log(`${numbers}th`);
//                   }else if(numbers==9){
//                     console.log(`${numbers}th`);
//                     }
// })
//--------------------------------//
// 34.Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// let pizza=["Margherita Pizza","Pepperoni Pizza","Vegetarian Pizza"]
// pizza.forEach((pizza)=>{
//   if(pizza.includes(pizza)){
//     console.log(`I like ${pizza}`);
//       }
// })
// let question="How much you like pizza?"
// let answer1=`I like ${pizza} such as I really love pizza!`
// console.log(question);
// console.log(answer1);
//-------------------------------//
// 35.Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// let animals=["lion","tiger","dog"]
// animals.forEach((animals)=>{
//   if(animals.includes(animals)){
//     console.log( `A ${animals} would make a great pet`);
//   }
// })
// console.log("Any of these animals would make a great pet!");
//----------------------------------//
// 36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function  make_shirt(size:string,message:string){
// console.log(`${message} ${size} `);
// }
// let size="L";
// let message="The size of the T shirt is"
// make_shirt(size,message)
//-------------------------------//
// 37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// function  make_shirt(size:string='S',message:string="I love TypeScript"){
//   console.log(message);  
//  console.log(`THIS IS MY SHIRT SIZE is ${size}`);
//    }
//   make_shirt("M")
//   make_shirt("L","size is available");
//-------------------------------//
// 38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// function describe_city(city:string,country:string){
// console.log(`Such as ${city} is ${country}`);
// }
// describe_city("karachi","pakistan")
// describe_city("sidney","Australia")
// describe_city("Mumbai","India")
//-------------------------------//
// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
// function city_country(city:string,country:string){
// return city+", "+ country
// }
// console.log(city_country("Lahore", "Pakistan"));
// console.log(city_country("Sidney,", "Australia"));
// console.log(city_country("Mumbai", "India"));
//----------------------------//
// 40.Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// function make_album(name:string,title:String){
//   let Object={
//     name,
//     title,
//   }
//   return Object
// }
// console.log(make_album("Leonardo da Vinci","Mr").name);
// console.log(make_album("Leonardo da Vinci","Mr").title);
// console.log(make_album("Frida Kahlo","Mr").name);
// console.log(make_album("Frida Kahlo","Mr").title);
//--------------------------------------//
// 41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// let magicians_Names=["Mystique Mirage","Enchantara the Enigma","Arcane Illusionist","Merlinia Shadowcaster","Eclipsar the Enchanter",
// "Nebula Nova Spellbinder"]
// function show_magicians(){
// magicians_Names.forEach((magicians_Names)=>{
//   console.log(magicians_Names);
// })
// }
//  show_magicians()
// 42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// let magicians_Names=["Mystique Mirage","Enchantara the Enigma","Arcane Illusionist","Merlinia Shadowcaster","Eclipsar the Enchanter",
//  "Nebula Nova Spellbinder"]
// function make_great(){
//   magicians_Names.push("Quantum Quicksilver")
//   let great=magicians_Names.forEach((magicians_Names)=>console.log(
//     `The Great ${magicians_Names}`
//   );
//   )
// }
// make_great()
// 43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// let magicians_Names=["Mystique Mirage","Enchantara the Enigma","Arcane Illusionist","Merlinia Shadowcaster","Eclipsar the Enchanter",
//  "Nebula Nova Spellbinder"]
//  function make_great(){
// let magicians=[]
// let ds= magicians_Names.forEach((magicians_Names)=>{
//   console.log( magicians_Names + " The Great ")});
// magicians=[ds]
// return magicians
// }
//  make_great()
// function show_magicians(){
//   magicians_Names.forEach((magicians_Names)=>{
//     console.log(magicians_Names);
//   })
// }
//-----------------------------//
//44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// let ingredients1=["Tomato","Mustard","pickles"]
// let ingredients2=["Onion","Avocado","Bacon"]
// let ingredients3=["Peppers","Cucumber","Spinach"]
// function Sandwiches(ingredients){
//   ingredients.forEach((ingredients)=>{
//     console.log(ingredients);
//   }) }
// Sandwiches(ingredients1)
// Sandwiches(ingredients2)
// Sandwiches(ingredients3)
//----------------------------//
// 45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function storeInformation(manufacturer, modal) {
    var car = {
        manufacturer: manufacturer,
        modal: modal
    };
    car.forEach(function (car) {
        console.log.apply(console, car);
    });
    return car;
}
console.log(storeInformation("red", "toyota"));
