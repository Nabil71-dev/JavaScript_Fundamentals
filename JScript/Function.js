 // 1.function making method regular
 function funct(c,d)
 {
     return c+d;
 }
 console.log(funct(2,3))
//we can also assign the calling value into a variable then print it;
 var z=funct(4,5)
 console.log(z)


// 2.We can make function inside of a variable and access it by calling that variable
 let f=function(a,b)
 {
     return a+b;
 }
 console.log(f(10,20))//calling and printing that f;

 
 // 3.way of making object in Java Script
 let object=
 {
     //making function method inside an object
    func:function(x,y)
    {
        return x+y
    }
 }
 console.log(object.func(3,3))//calling that method using that object

 // 4.making constructor function
 let user=function(a,b,c)
 {
    //making the blue print for value
    this.Name=a,
    this.Id=b,
    this.Batch=c
 }
 let info=new user("Nabil","C191071",48)//calling constructor function and initializing value
 console.log(info)//printing everything


 /* 5.in closure function inner function will use variables(perameters) of outer func
  kind of scope chain ,it gives the feel of private & public behave*/
 function f1(n1)
 {
    var a1=n1
    return function f2(n2)
    { 
        var a2=n2
        console.log(a1+a2)
    }
 }
 f1(8)(9)//first value for 1st function other for 2nd one
 
 // 6.arrow function , inside parentheses we can work with/without parameter
  let add = (i, j)=>i+j //{return something or console.log or statement}
  console.log(add(5,7))


 //setTimeout func will execute after its initialization time;
 //after all of other function end then set time will start its execution
 //behave of "this" changes depend on the following method
 function func1() 
 {
    //declaring setTimeout method with 2s time,it will execute after 2s
     setTimeout(function(){
         var inside="Inside of time out"
         console.log(inside)
     },2000)
     console.log("Outside of time out")
 }
 function func2()
 {
    //it will execute first
    console.log("before calling func1")
    //calling func1
    //it will print the outer components of func1
    func1()
    //then it will execute before setTimeout method of func1
    console.log("after calling func1")
 }
 func2()

 //declaring and assigning a at window
 window.a=20
 function func3()
 {
    this.a=5
    setTimeout(function(){
        //it will print a which is in window object
        console.log(this.a+" With SetTime regular func")
    },2000)
    setTimeout(()=>{
         //arrow function will print a which is in window objcet
        console.log(this.a+" With SetTime arrow func")
    },2000)
 }
 //declaring object method
var obj2=
{
    a:10,
    func4:function()
    {
        //it will print a which is inside of object
        console.log(this.a+" Without SetTime regular func")
    },
    //arrow function will print a which is in window objcet
    arr:()=>console.log(this.a+" Without SetTime arrow func")
}
//this behave shows because of the creation of function inside obejct and SetTimeout method
let obj = new func3()
obj2.func4()
obj2.arr()