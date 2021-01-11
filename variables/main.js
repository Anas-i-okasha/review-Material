console.log('week2')
// 1)Write a function addToList that accepts a string argument toDo and returns the current list as a string, every time we invoke the function it should return the old toDo item + the new one
let result = ""
const addToList=(toDo)=>{
        result =result+ " " + toDo
        return result
}

//Write a function minMax that accepts a number argument number and returns a
//  string representing the maximum number and the minimum number, read the comments for more information.

let max = Number.NEGATIVE_INFINITY
let min = Number.POSITIVE_INFINITY

const minMax = (number)=>{
if(number>max){
    max = number
} if(number<min){
    min = number

}
return "the maximum is:  "+ max + " and the min number is "+ min 
}