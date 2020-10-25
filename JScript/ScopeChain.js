//Here we declaring value with type 'Let' we can also do this with 'var'
//In this case we are giving access of all to scope2 as its the child of rest f 

let a=10
scope1()
function scope1()
{
    let b=20
    scope2()
    function scope2()
    {
        let c=30 
        console.log(a+b+c)
    }
    //we can't consol log(a+b+c) here, cause c will be undeclare 
    //but we can access a,b in this scope
}
//we can't consol log(a+b+c) here, cause b,c will be undeclare 
//but we can access a in this scope

//                                           Scopchain with var                                   //
//this value will be in window 
var x = 20
function f1() {
    var x = 200
    function f2() { 
        /*child of rest function,it can access all value and it will take the value from changed
         window, since value of x has been changed*/ 
        var y = x+x
        console.log(y)
    }
    f2()
    //we can't consol log(y) here, cause y will be undeclare 
    //here value(200) of x will be the that one which is in this block
    console.log(x)
}
f1()
//here value(20) of x will be the that one which is in this block
console.log(x)