
//       function


// 1
function sum(){

    console.log(2+3)
}
sum()



// 2
function Addition(){

    return 1+2
}
console.log()


// 3
function sub(){

   return 1+5
}
console.log(sub())



// 4
function product(){

    return 5*4
}
let _result = product()



// 5 
function divide(num1 :number,num2:number){

    return num1 % num2 
}
let result = divide(2  ,2); {

    console.log(result)
}


// 6 
function addition( num1 :number,num2:number): number {

     return num1 +num2
}
let result_ =addition (5,4)



// 7 anony
let multi = function (num1 :number ,num2 :number):number {

    return 5*6
}
multi( 5,6)



// 8 

type Multi_ = (num1 :number ,num2 :number)=>number
let multi_:Multi_ = function (num1  ,num2 ):number {

    return 5*6
}
let $result= multi_(5,6)

console.log($result)



// 9 lamda/arrow (if we put {} we have to give return statment ,
// so in this if i won't put {} we don't need to put return statment  )  


//   "{}return" both sides are equal "=>"

let $sum =(num1:number ,num2 :number):number => num1+num2
let reSult = $sum (3,6)
console.log(reSult)



//    optional parameter    (optional parameter ko () kay end may rakh na ah )


let fullName = ( firstname :string ,lastname?:string)=>firstname +lastname  

let full =fullName('Rosei')
console.log(full)


// if / else


let stagename = (firstname :string ,lastname?:string)=>{
    if (lastname===undefined){
        return firstname
    }else {
        return firstname + ''+lastname
    }
}                                        ;                      
let fulln = stagename ('Rosei')
console.log(fulln)


// defalt (because of this console we only gets first console but (let fulln_) in result it give us undefined 
// so, i order to get result we have to give return statment. )


let stagename_ = (firstname :string ,lastname:string ="Monaban")=>{
    // console.log(firstname, lastname) 
     return firstname+''+lastname 
}
let fulln_ = stagename_ ("la ","lisa")
console.log(fulln_)




//    rest     (we can add unlimited parameter add kar saktay han console)


console.log("hello world", 2 ,true,{},[])

let makeMessgae = (name:string, ...messgae:string [])=>{
    console.log(messgae.join(" "))
}
makeMessgae("Aylin","hello","let's ","meet")




// function overloding


function  add (arg1:number,arg2:string):string;
function  add (arg1:number,arg2:number):string;
function  add (arg1:string,arg2:string):string;

function add (arg1:any,arg2:any):any{
    return arg1 +arg2
}

let addi =add (7,4)
console.log(addi)


// tuples

let fruits:[string ,string,number ]=["orange","mango",2]

fruits.pop()

console.log(fruits)
