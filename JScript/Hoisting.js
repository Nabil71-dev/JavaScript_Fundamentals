 //hoisting :we can call funtion before declare it;
 //only 'var' support this feature
 sum(30,40)
 function sum(i,j)
 {
     console.log(i+j)
 }
 
//Hoisting (regular declaring value with var it shows undefined)
console.log(g)
var g=40
 //but in case of variable or others things we will found undefined,it's cause of execution system