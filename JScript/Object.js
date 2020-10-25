 //way of making object in Java Script
 let object= 
 {
     //making object user defined
    f_name:'Mahmudul',
    l_name: 'Hasan',
    batch: 48,
    dept: 'CSE',
    sem:2,
    func:function(x,y)//making function method inside object
    {
        return x+y
    }
 }
 console.log(object.func(3,3))//calling that method
 object.sem=3;//we can change value of varibles of obj like this
 console.log(object.sem)//printing value from object
 console.log(object.batch)//printing value from object
 console.log(object['dept'])//another object printing method