// Q1

var studentsName=[];

// Q2

// n/a



// Q3

// var ary =["abc"];

// Q4
// var ary1=[1, 2];


// Q5

// var ary2= [true, false]



// Q6

// var ary3=[1, "abc"]



// Practice pop arrays

// var students=["ahmed", "ahsan", "ammar", "kashif"]



// var ali= students.pop();.....removes the last element and returns it


// console.log(ali)

// var alii= students.pop();

// console.log(alii)


// PUSH


// var students=["ahmed", "ahsan", "ammar", "kashif"]


// var ali = students.push("zain");.....adds the new elements in the last and returns the new array length

// console.log(ali)


// var students=["ahmed", "ahsan", "ammar", "kashif"]


// var ali = students.unshift("faisal");.....shift pop ka opposite hy, unshift opposite hy push ka

// console.log(ali)


// var quali= ["1) SSC","2) HSC", "3) BE", "4) ME"]

// alert("Qulifications"+ 
// quali[0]
// +quali[1]
// +quali[2]
// +quali[3]

// )


// LOOPS

// for (var i=0; i < 5; i++ ){
// console.log("Test")

// }

// for (var i=0; i <= 5; i++ ){
// console.log("Test")

// }




// for (var i=0; i <= 5; i++ ){
// console.log(i)

// }


// var arr=["ali","ahmed", "khan"]

// var flag = false

// for (var i =0; i> arr.length; i++){
// if (arr[i]== "ahmed"){
// flag="yes";
// console.log(flag)
// }
// }

// var num1=[1,2,3,4,6,7]

// for (var i=0; i <=7; i++ ){

//     var num2= num1[i]-1
//     if (num2-1 > 1){
//         break;
//         console.log(num2)
//     }
// // console.log(num2)

// }

var numbers= [13, 14,15,17,18,19,21]

for (var i=0 ; i < numbers.length-1; i++){

// numbers[i+1]+"-"+numbers[i];


if (numbers[i+1]-numbers[i] !== 1){

    console.log(numbers[i]+1)
}

}

























