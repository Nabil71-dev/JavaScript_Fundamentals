/* If 'this' declare in a function which is in global context
   then 'this' will point to window object
   On the other hand if this declare in a function within an object
   then this will point to that object*/

    
//funtion in global context
// 1.making method
function func(a,b,c)
{
 //making blue print for different object here 'this' will point to window object
    this.name=a
    this.age=b
    this.id=c
}
//making object,initializing value  & calling that function
//here new is using to make blank place of obj1 to insert value of func 
let obj = new func('nabil',21,71)
//printing obj
console.log(obj)


// 2.making object
var d=
{
    //making function inside of an object,
    f:function()
    {
//here this will pont to the object d,        
        console.log(this)
    }
}
//calling that function
d.f()