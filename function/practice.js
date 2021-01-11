console.log('week1');

// 1 ) Write a function fullname that accept first name and second name as argument then return string containing fullname

const fullNmae = (firstName , lastName)=>{
    return firstName + " " + lastName

}

//2)Write a function average that accepts two number arguments and returns the average of these numbers

const avarage = (a , b)=>{
    return (a+b) / 2

}

//3)Using the defined functions below and your average function to guess the output of the following expressions

const cube = (num)=>{
 return num*num*num
}
const square = (num)=>{
  return num*num
}

//4) Write a function toThePowerOf that accepts two number arguments, base, exponent and returns the base to the exponent power
const toThePowerOf = (base , exp)=>{
return Math.pow(base , exp)
}

// 5) Write a function floor that accepts one number argument, number and returns the number as an integer.

const floor = (num)=>{
return Math.floor(num)
}

// 6) Write a function calculateProfit that accepts three arguments unitsSold, unitCost, unitPrice and returns the net profit.
const calculateProfit=(unitSold , unitCost , unitPrice)=>{
return (unitSold*unitPrice ) - (unitSold*unitCost)
}

// 7) Write a function calculateTotalBillAmount that accepts three arguments total, taxPercentage, tip and returns the total after adding the tax and the tip.
const calculateTotalBillAmount=(total , tax , tip)=>{
    return (total*tax)+total + tip
}

// 8) Write a function ageInDays that accepts a number argument ageInYears and returns the age in days (ignore leap years)
const ageInDays =(ageInYears)=>{    
    return ageInYears * 365                   
}

// 9 )Write two functions calculateConeVolume and calculateConeSurfaceArea that accepts two number arguments height and radius and returns the volume and surface area for a Right Circular Cone
const coneVolume=(radius , height)=>{
    return ( Math.PI * (radius**2) * (height/3))

}
const coneSurface =(radius, height)=>{
 return Math.PI * (radius*radius) + Math.PI*radius*height
}

