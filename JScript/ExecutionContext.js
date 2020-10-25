//Here we declaring value with type Let
//In this case we are calling function from inside of a function
//it will follow stack
//after each calling it will complete the work,then return from where its called

let a=10
function scope1() //making scope 1 method
{
    let b=20
    scope2()//calling funtion "scope2" so the execution jump to function "scope2"
    console.log(b)//printing b,then it will jump from where its called
}
function scope2() //making scope 2 method
{
    let c=30
    scope3()//calling funtion "scope3" so the execution jump to function "scope3"
    console.log(c)//printing c,then it will jump from where its called
}
function scope3() //making scope 3 method
{
    let d=40
    console.log(d)//printing d,then it will jump from where its called
}
scope1()//calling funtion "scope1"
console.log(a)//finally global one will be printe