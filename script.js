// // // variables - data storing place 

// // // 3 types 

// // // 1. var 

// // // 2. let 

// // // 3.const 


// // // var  
// // // declaration and intialization

// // var age; 

// // age = 30;

// // var age=50;

// // age = "eight"

// // console.log(age);

// // // let 

// // let newAge;

// // newAge = 150;

// // newAge = "hi"


// // console.log(newAge);

// // // const 

// // const newAge1 = 120;

// // console.log(newAge1);

// // // printing statement 

// // // console.log();
// // // alert("hi everyone note")
// // // confirm("hi everyone note")
// // // prompt("enter your name")

// // // document.writeln("hghghvgh")

// // // let userName = prompt("enter your name")
// // // console.log(userName);


// // // console method
// // let newUser;

// // console.log(newUser);
// // console.error(newUser)
// // console.warn(newUser)
// // console.clear()


// // // dataTypes - 2

// // // 1. primitive datatypes 
// // // 2. non primitive dataType

// // // 1. primitive dataType 

// // // 1.Number
// // // 2.string
// // // 3.boolean
// // // 4.null
// // // 5.undefined

// // // 2. non primitive dataType 

// // // 1.array
// // // 2.object
// // // 3.function 
// // // 4.date 


// // // number /

// // // 1 2 3 e


// // // Array 

// // // let arr = ["apple","orange","banana",true,"guava","dates","strawberry"]
// // // console.log(arr[1]);

// // // object 

// // // let obj = {
// // //     uName : "navi",
// // //     uAge : 22,
// // //     uNum : 567,
// // //     uHobbies : ["chess","cricket"]
// // // }

// // // console.log(obj.uName);


// // // operators 

// // // 1.arithmetic operator 
// // // 2.assignment operator 
// // // 3.comparision operator 
// // // 4.logical operator 

// // // 1.arithmetic operator - mathematical value

// // // addition  +
// // // subraction -
// // // multiplication *
// // // division /
// // // modulus %
// // // increment ++
// // // decrement --

// // // console.log(10 + 10);


// // // increment and decrement 

// // // let num = 10
// // // num = num + 1
// // // num = num + 1


// // // console.log(num);

// // // let number = 15
// // //     ++number

// // // // console.log(number);

// // // // let number = 15

// // // // ++number;
// // // // number++;

// // // // console.log(number);

// // // // let sub = 15
// // // // --sub;
// // // // sub--;

// // // // console.log(sub);


// // // let newNum = 40
// // // let newNum1=--newNum
// // // console.log(newNum1,newNum);



// // // let a = 7
// // // let b = --a
// // // let c = b--

// // // console.log(a,b,c);



// // // let num = 43
// // // let num1 = --num + --num 

// // // console.log(num,num1);
// // // console.log(num-num1);

// // // // assignment operator 

// // // // addition 

// // // let age1 = 20

// // // // age1 += 20 -- age1 = age1 + 20

// // // age1 += 20

// // // console.log(age1);


// // // let age2 = 20

// // // let additionalVal = 100

// // // age2 **= additionalVal

// // // console.log(age2);


// // // comparision operator or relational operator 

// // // < 5<2 false
// // // > 5>2 true
// // // <= 5<=2 false
// // // >= 5>=2 true
// // // == 5==2 false 5==5 true 5=="5" true
// // // != 5==2 true 5==5 false 5=="5" false
// // // === 5===2 false 5===5 true 5==="5" false
// // // !== 5===2 true 5===5 false 5==="5" true

// // // console.log(40==="40");

// // // console.log(10<20);

// // // console.log(50>20);

// // // console.log(20==20);

// // // console.log(20=="20");

// // // console.log(20===20);

// // // console.log(20==="20");

// // // console.log(20!=="20");

// // // console.clear(50>=50);


// // // // logical operator 

// // // // logical AND &&  true true = true

// // // // logical OR || true false = true 

// // // // logical NOT ! true = false

// // // console.log((5<2)&&(5>3));
// // // console.log((5<2)||(5>3));

// // // console.log(!(5>3));

// // // let age5 = 18

// // // console.log(age5>=18 && age5<= 30 );


// // // console.clear(!(5>=5)&&!(5>=5));

// // // concatination 


// // // let str = "hello";
// // // let str1 = "world";

// // // console.log(str+" "+str1+" earth");


// // // template string 

// // // console.log(`${str} ${str1} earth javascript`);


// // // 5*1=5

// // // let first = 5
// // // let second = 5

// // // console.log(typeof(5));


// // // console.log(first+"*"+second+"="+first*second);

// // // console.clear(typeof(`${first}*${second}=${first*second}`));


// // // type conversion 

// // // 2 types 

// // // 1.implicit type conversion 
// // // 2.explicit type conversion 

// // // 1.implicit type conversion 

// // let str = "45"
// // let num = 100

// // console.log((num+str));
// // // string 
// // console.log(typeof("hi"+true));
// // console.log(typeof("hi"+undefined));
// // console.log(typeof("hi"+false));
// // console.log(typeof("hi"+null));
// // console.log(typeof("hi"+[1,2]));
// // console.log(typeof("hi"+{1:2}));

// // // number /

// // console.log(10+true);
// // console.log(10+"10");
// // console.log(typeof(10+undefined));
// // console.log(typeof(10+[1,2]));
// // console.log(10+{10:20});
// // console.log(10+"");

// // // Boolean 

// // console.log(true + 10);

// // console.log(true + undefined);

// // console.log(true+"");

// // console.log(10=="10");

// // console.clear(10-"3");

// // // Explicit conversation 

// // console.log(10+Number("10"));
// // console.log(Number("    "));
// // console.log(Number(false));

// // console.log(Number([10976]));
// // console.log(Number({4:5}));
// // // Boolean
// // console.log(10+Boolean("10"));
// // console.log(Boolean("    ")+1);
// // console.log(Boolean(false));

// // console.log(Boolean([10976]));
// // console.log(Boolean({4:5}));
// // console.clear(Boolean(undefined));


// // // flow control /

// // // 1.conditional statement 
// // // 2. looping state ment 


// // // 1.conditional statement 


// // // 1.if statement 
// // // 2. if else statement 
// // // 3.if-else if-else statement 
// // // 4.ternary operator 
// // // 5.switch statement 
// // // 6.nested if statement

// // // condition + true = allow
// // // if statement 

// // let a = 10
// // let b = 20
// // let c = a+b

// // if(a<b){
// //     console.log(c);
    
// // }

// // // if else statement 

// // let data = false

// // if(data){
// //     console.log("successfully received");
    
// // }else{
// //     console.log("data not valid")
// // }


// // // if-else if -else 
// // let hours = 19
// //     if(hours >=1 && hours <=6 ){
// //         console.log("early morning"); 
// //     }else if(hours>=7 && hours<=11){
// //         console.log("morning");

// //     }else if(hours>=12 && hours<=15){
// //         console.log("afternoon");
        
// //     }else{
// //         console.log("evening");
// //     }

// //     // switch statement /

// //     // switch(){
// //     //     case value : statement; break;
// //     //     case value : statement; break;
// //     //     case value : statement; break;
// //     // }

// //     let trafficSignal = "green"

// //     switch(trafficSignal){
// //         case "red" : console.log("stop the vechile"); break;
// //         case "yellow" : console.log("start the vechile");break;
// //         case "green" : console.log("go");break;    
// //     }

// //     // nested if 

// //     let qualification = 12
// //     let weight = 30
// //     let height=160

// //     if(qualification>=10){
// //         if(height>=150){
// //             if(weight>=50){
// //                 console.log("your selected");
// //             }else{
// //                 console.log("your weight not eligible");
                
// //             }
// //         }else{
// //             console.log("your height not eligible");
            
// //         }
// //     }else{
// //         console.log("your qualification is not eligible");
        
// //     }

    
    
    
// //     // ternary operator  
    
// //     // condition ? "statement" : "statement "
    
// //    let allow = null

// //    allow ? console.clear("ok you go") : console.clear("you not go");
      


// // // looping statement 

// // // 1.for loop 
// // // 2.while loop
// // // 3.do while 
// // // 4. for of loop
// // // 5. for in loop



// // // for loop 

// // // for(var intialization ; condition ; counter){

// // // }

// // for (let i=1;i<11;i++){

// //     if(i%2==1){
// //         console.log(i);
        
// //     }
  
// // }

// // // intialiazation i=1   1     2    3     4   ...  10    11

// // // condition      i<11  1<11  2<11  3<11 4<11 ... 10<11  11<11

// // // iteration      i++   1++   2++   3++  4++  ... 10++

// // // result          ,    1     2     3     4  ...   10


// // // while loop 

// // // intizilation

// // // while(condition){
// // //     statement 
// // //     counter
// // // }


// // let a1 = 10;

// // while(a1<0){
// //     console.log(a1);
// //     a1--
    
// // }

// // // intiazaliation
// // //  do {
// // //     statement ; iteration
// // //  }

// // //  while(condition)

// // console.clear()
// // let number  = 10

// // do{
    
// //         console.log(number);number++
        
    
    
// // }
// // while (number<20)
// // console.clear();


// //     // for of loop 


// //     // let lang = "javascript"

// //     // for(let a of lang){
// //     //     console.log(a);
        
// //     // }

// //     // for in loop 

// //     // for(let b in lang){
// //     //     console.log(lang[b]);
        
// //     // }





// // // function one(){
// // //     console.log("hello everyone");
    
// // // }

// // // one()

// // // let person = {
// // //     name : "keerthi",
// // //     age : 22
// // // }

// // // function print(){
// // //     console.log("hello ",person.name);
// // //     console.log("hello ",person.age);
    
// // // }

// // // print()



// // // 1. named function 

// // // function hello(){
// // //     statement

// // // }

// // // hello()

// // // 2.annonymous function 

// // // let hi = function(){
// // //     console.log("h");   
// // // }

// // // hi()

// // // 3.arrow function 

// // // let arrow = ()=>{
// // //   console.log("hello");
  
// // // }

// // // arrow()


// // // let person1 = {
// // //     name : "livi",
// // //     age : 67
// // // }

// // // let arrow = (name,age)=>{
// // //     console.log(`hi ${name}, your age is : ${age}`);
// // // }

// // // arrow("kamal",22)
// // // arrow("livi",22)
// // // arrow("navi",22)



// // // let arrow1 = ()=>{
// // //     console.log(`hi ${person1.name}, your age is : ${person1.age}`);
// // // }

// // // arrow1()



// // // default parameter


// // // let employeeId = "Av123"

// // // let newId = employeeId && "uq1123"

// // // console.log(newId);

// // // function userData(uName="people",newId=20){
// // //     console.log(`hi ${uName}, my Age ${newId}`);
    
// // // }

// // // userData("navi",3)

 
// // // function findAreaOfRect(l,b){
// // //     let condition = true;
// // //     if(condition){
// // //         return l*b
// // //     }else{
// // //         return null
// // //     }
// // // }
// // // let z =  findAreaOfRect(10,20)
// // // console.log(z);





// // // function hi(num){
// // //     return(num**3)
// // // }

// // // let calc = hi(prompt("enter the val : "))

// // // alert(calc);


// // // function nonReturn (num){
// // //     return(num);
// // // }

// // // let add = nonReturn(3)
// // // console.log(add);


// // // var -- global scope
// // // let -- block scope
// // // const -- block scope


// // // console.log(aa);
// // // var aa = 10;

// // // let bb = 10
// // // console.log(bb);


// // // const cc = 10
// // // console.log(cc);

// // var - global scope 

// function outerFunction(){
//     if(true){
//         var functionVar = "I am VAR Variable"; 
//     }
//     console.log(functionVar);
// }
// outerFunction()


// // let - block scope 


// function letVar(){
//      if(true){
//         let functionLet = "I am LET Variable"; 
//         console.log(functionLet);
//     }
// }

// letVar()


// // const - block scope 


// function constVar(){
//     if(true){
//         let functionConst = "I am Const Variable"; 
//         console.log(functionConst);
//     }
// }

// constVar()


// // var a =10;
// // let b = 20
// // const c=30;

// // function accessGlobalScope(){
// //     var a = 100
// //     var b= 200
// //     var c = 300

// //     console.log(a+b+c);
    
// // }

// // console.log(a+b+c);


// // accessGlobalScope()




// let innerFunction = ()=>{
//    if(true){
//     var a = 10
//     var b = 20
//     var c = 30

//     console.log(a+b+c);
//    } 

//    console.log(a);
//    console.log(b);
//    console.log(c);
   
    
// }

// innerFunction()



// hi()
// function hi(){
//     console.log("hi");
    
// }


// let hello = function(){
//     console.log("hello");
    
// }
// hello()

// var how = ()=>{
//     console.log("how");
    
// }
// how()

// function one(){
// console.log("i am highorder function");

// }

// function two(){
//     console.log("i am a callback Function");
    
// }


// one(two())


// function add(callback,a,b){
//     console.log(a+b); //60
//     callback(20,20)
    
// }

// function sub(num1,num2){ //num1-20,num2-20
//     console.log(num1-num2);
    
// }

// add(sub,20,40)

// let apple = (a,b)=>{
//     console.log(a+b);
    
// } 

// apple(20,30)




// // currying 


// function calc(a){
//     return function(b){
//         return function(c){
//             console.log(a+b+c);
//         }
//     }
// }

// calc(1)(2)(3);



// self invoke function (IIFE)


(function(a,b){
    console.log
    (`${a} your sale is now keep shop something, your age : ${b}`)
    
})("navi",22)

// //  uncurrying

function addd(a,b,c){
   alert(a+b+c)
    
}

// addd(1,2,3)

// let traffic = "green"
// switch(traffic){
//     case "red" : console.log("stop");
//      break;
//     case "yellow" : console.log("start");
//      break;
//     case "green" : console.log("go");
//      break;
// }

// generator function  

function*genFunction(){
    yield "first val"
    yield  2
    yield "second"
    return "final val"
}

let gen = genFunction()

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());












