console.log('week1')

// 1) Write a function `login` that accepts two string arguments `username` and `password` and
// returns a string "login successful" if both are valid or return "Invalid login information" with the appropriate reason,
// the function will check the following:
// 1- if the length of the username is greater than 4
// 2- if the username is of the specified usernames below
// 3- if the password length is greater or equal to 8
// 4- if the password is equal to the corresponding password

// (username => "MrPotato", password =>"LonelyPotato"),  (username => "theWiseMan", password => "12345678")
const login =(userName , password)=>{
    if(userName.lenght>4 && password.lenght>=8){
    }if(userName ==="MrPotato" && password==="LonelyPotato"  || userName==="theWiseMan"&& password==="12345678"){
    return ("login sucessful")
    }
    return "invalid information "
    }
    //2) Write a function isLeapYear that accepts a number argument year and returns true if the year is a leap year,
    //  leap years are divisible by 4 but non leap years are divisible by 100 for the exception of 400 (leap years are also divisible by 400)
 const isLeapYear = (year)=>{
  if((year %4 ===0 && year %100 !==0) || (year %400 ===0)){
  return true
  }
  return false
 }

 // 3)Write a function deposit that accepts an argument amount and returns the deposited amount, the function should only accept positive number arguments otherwise return "Please enter a valid number"
 const deposit = (amount)=>{
 if(typeof(amount) ==='number'){
     return amount
 }
 return "enter valid information "
 }

//  write a function `startsWith` that accept two string arguments `string`, `character` and returns true if the string
// starts with that character

const startsWith = (string , character)=>{
if(string[0].toLowerCase()===character.toLowerCase()){
    return true
}
return false
}

// 3) Write a function endsWith that accept two string arguments string, character and returns true if the string ends with that character.

const endsWith =(string , character)=>{
if(string[string.length-1].toLowerCase()===character.toLowerCase()){
    return true
}
return false
}

const search = (string , letter)=>{
for(let i=0 ; i<string.length ; i++){
    if(string[i]===letter){
        return true

    }

}
return false
}


const searchWord = (string , letter)=>{
    if(string.toLowerCase().search(letter.toLowerCase()) !==-1){
        return true
    }
    return false
}