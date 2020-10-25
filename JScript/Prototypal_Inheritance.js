 // 1.creating object1 (user1)
  var user1=
 {
    //arguments for obj 1
    username: "Nabil",
    id: "71",
    password: "12345"
 }
 //creating object2 (user2)
 var user2=
 {
    //making obj1 values prototype inside obj2,so that we can access both in here
    z: Object.create(user1),
    //arguments for obj 2
    PaymentMethod: "Bkash",
    PaymentHistory:"+8801952568994"
 }
 //prototype for user
 var x= Object.create(user1)
 console.log(x)
 //prototype for subscriber
 var y= Object.create(user2)
 console.log(y)


 // 2.we can inherit property like below,with user2 object we can call property of user1
 user2.__proto__ = user1


 // 3.we can inherit property like below
 let animal = {
    legs: 4,
    walk: function() {
        console.log('walking on ' + this.legs + ' legs')
        //here 'this' point on window leg just because of animal inherited to bird
    }
 }
 //inheriting animal object inside of bird.now we can access animal with bird object
 let bird = Object.create(animal)
 bird.legs = 2
 bird.fly = function() {
    console.log('flying')
 }
 bird.walk()
 bird.fly()

 
// 4.making method
function func(a,b,c)
{
 //making blue print for different object here 'this' will point to window object
    this.name=a
    this.age=b
    this.id=c
}
//we can also add like below on the blue print by prototypal inheritance
func.prototype.BKash='+8801832255129'
//here new is using to make blank place of obj1 to insert value of func 
let obj = new func('nabil',21,71)
console.log(obj)