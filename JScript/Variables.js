// only 'var' point in Window 'let'/'const' can't

//simple variable declaration
  let x= 80;
  var y= 90;
  const a=100;
//we can change the value of 'var' & 'let' after assaigning value
  x=10;
  y=20;

//output of that value in browser console
 console.log(x);
 console.log(y);
 console.log(a);
 
 //var variables are added to the global object as propertie
 console.log(window.y)
 
 //we can declare array like this it will return all type with no. of argument
 let b=['a',2,"Nabil"]
 console.log(b)

 //declaring string
 let e="My name "
 let g="Mahmudul Hasan Nabil"
 console.log(e + g)//we can add strings like this
 console.log(e+'is '+g)//we can add more string like this

 //Writing into an HTML element, using innerHTML.
 //Writing into the HTML output using document.write().
 //Writing into an alert box, using window.alert().
 //Writing into the browser console, using console.log().