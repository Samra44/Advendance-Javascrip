// Function 

// A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

// without parameter
// with parameter
// with return
// Without return 
// Regular Function without parameter

 function add_number(){  // without parameter

console.log("Add to number",5+5)
console.log("Add two Number")
}
// add number

function sum (a,b){
console.log ("Sum of two number is:",a+b)
}
sum(5,10)
sum (100,10)
sum (32.5,50.5)


 function sum_number(a=10,b=10){         //with parameter   default prameter    
    console.log("Sum of two number is:" ,a+b)
  }

      sum_number()

 //use of return statement
//  function product_number(a,b){
//      return a*b 
// }


//  let result =product_number(5,3)
//  if(result>=50){
//     console.log("You are selected")
//  }else{
//      console.log("You are not selected")
//  }

 
// let fname = "Shumaila";
// for(let i =0;i<fname.length; i++){
//     console.log(fname[i])
// }
// for(let i  = fname.length-1;i>=0 ; i--){
//     console.log(fname[i])
// }

let a = "JavaScript";
for(let i =0; i<=a.length;i++){
    console.log(a[i])
}

for(let i =a.length-1;i>=0;i--){
    console.log(a[i])
}