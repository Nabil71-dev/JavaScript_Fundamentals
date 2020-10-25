//we can't access value of l,v from outside of the func it behaves like one box

/*'let' give the code block behave like other(c,c++) language bt var is shows
 default JScript behave,which is point to window */

/*this behave not because of charactaristics of var,let its because of func which
make this block*/ 
function func()
{
    let l="Java"
    var v="Script"
    console.log(l)
    console.log(v)
}
func()

//we can access i from outside of 'for' loop if we declare a value with "var";
for(var i=0; i<=5; i++)
{  
    //this is in window
}
console.log(i);//this is printing the number of i

//we can't access i from outside of for loop if we declare a value with "let";
for(let j=1; j<4; j++)
{
   console.log(j);
}
 //we can't access z from outside of if condition if we declare a value with "let";
if(true)
{
    let z=100;
    console.log(z);
}
 //we can access w from outside of if condition if we declare a value with "var";
if(true)
{
    var w=70;
    //this is in window
}
console.log(w);
