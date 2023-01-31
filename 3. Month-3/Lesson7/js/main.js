//? taqqoslash / boolean valuelar
// var x = 10;
// var y = 4;
// console.log(x%y);
// console.log(2**2);
// console.log(2<3);

//todo  if vs  else
// var usernameInput = prompt("enter your username");
// var passewordInput = prompt("enter your password");

// var username = "diyor";
// var passeword = "999"

// console.log(usernameInput === username);
// console.log(passewordInput === passeword);

// if (usernameInput === username) {
//     if (passewordInput === passeword) {
//         console.log("Welcome to home");
//     }else {
//         console.log("Your password is not correct");
//     }
// }else {
//     console.log("Your username is not correct");
// }

//todo else if 
// let username = prompt("Username:");

// if (username === "Abror") {
//     alert("Abror");
// }else if (username === "Ismoil" ) {
//     alert("Ismoil");
// }else if (username === "Komil" ) {
//     alert("Komil");
// }else {
//     alert("Username togri kelmadi")
// }

//todo querySelector()

// let value = prompt("type your value");

// let headingEl = document.querySelector("#heading");

// if (value !== "") {
//     headingEl.textContent = value;
// }

//! Amalyot 
//? user object ochish
//? userdan malumotlar olish
//? malumotlarni qayta ishlash
//? html da malumotlarni korsatish

// function seyHello(name) {
//     return`Assalomu alekum ${name} aka!`
// }

// function calcAge(birthyear) {
//     return 2070 - birthyear;
// }

// const user = {
//     name: null,
//     age: null,
// };

// const username = prompt("Enter your firstname");
// user.name = username;
// const birthyear = prompt("Enter your birthyear");
// user.age = calcAge(birthyear);

// const headingEl = document.querySelector("#heading");
// const template = `${seyHello(user.name)} Sizning yoshingiz ${user.age}da`;
// headingEl.textContent = template;

//todo OBJECT
// let username = "ali";
// let age = 20;
// let isStudent = false;

// let user_one = {
//     name: "ali",
//     age:20,
//     isStudent: true,
//     location: "Tashkent",
// };

// let user_two = {
//     name: "bobir",
//     age: 18,
//     isStudent: false,
//     location: "Tashkent",
// }

// console.log(user_one.name, user_two);
// console.log(user_one["name"], user_two["age"]);

// let keyyo = prompt("Enter your key");
// alert(user_one[key])






//todo Return
// const username = prompt("enter your username:");

//  function $(name) {
//     if (name === "Ibrohim") {
//         var el = document.querySelector("#text");
//         return "Bu Ibrohim";
//     }else if (name === "Jasur") {
//         return "Bu Jasur";
//     }else {
//         return "Bu Xechkim";
//     }
// }

// alert($(username));

//? type ceorcion and type conversion
// console.log(3*"3")

// const num = prompt("enter your loved namber:")
// const realNum =Number(num);
// console.log(realNum);
// const string = String(9)
// console.log(typeof string);
// const realTrue = Boolean(0)
// console.log(+num);



//?truthy and falsy values
//! 0 / "" / undefind / null / NaN / false
// if(1) {
//     console.log("Hello world")
// }else{
//     console.log("Bu false qiymat")
//     }


// TODO lesson _ 10 codes
//? Callback 
// function  handler(b) {
//     console.log(b);
// }

// handler("ibrohim")

//? Amaliyot
// const arr = [["name", "Ibrohim"] , ["age" , "20"],["country", "uzbekistan"], ["color" , "red"]]

// let obyect ={}

// function obj(a){
//         for (let j=0; j<a.length; j++) {
//             obyect[a[j][0]] = a[j][1]  }
// }   
// obj(arr)
// console.log(obyect) 



//? Nested loop
// for (i=0; i<5; i++){
//     console.log(i)
//     for(j=0;j<10;j++){
//         console.log(j)
//     }
// }


// const arr = [

//     ["Ibrohim", "Userbek", "Vscode", "Javabek", "Sublime jiyan"],
    
//     ["Ismoil", "C bobo", "Paskal ajdod", "C# tog'o"], ["Abdulla", "Playstation aka", "Python kalla"],
    
//     ["Jasur", "Asu", "Kamol", "Amir"],
    
//     ["Mishkabek", "Klaviaturajon", "Ekranoy"],
    
//     ];
    
//     for (let i=0; i < arr.length; i++) { 
//     console.log(arr[i]);
    
//     for (let j = 0; j < arr[i].length; j++) { console.log(arr[i][j]);
    
//     }
    
//     }






//? Loops from backwards
// const list = ["Ibrohim", "Userbek", "Vscode", "Javabek", "Sublime jiyan"];
// for (let i = list.length-1; i >= 0; i--) {
// console.log(list[i]);
// }




// ? Objects methods
// const obb = {
//     name:"sardorbek",
//     age:96,
//     country:"uzbekistan"
// }


// console.log(Object.keys(obb));
// console.log(Object.values(obb));
// console.log(Object.entries(obb));


// ?isNaN
// const num = 9* "Hello"
// console.log(isNaN(num)); 






