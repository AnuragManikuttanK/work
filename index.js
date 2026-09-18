let str={
  firstname:"Anurag",
  lastname:"K",
  age:19,
  getfullname(){
    return this.firstname +" "+this.lastname;
  },
  celebratebirthday(){
    return this.age+1;
  }
}
console.log(str.getfullname());
console.log(str.celebratebirthday());
////

const a=45;
function sum(b){
  console.log(a+b);
}
sum(10);

/////
function sum(str){
  let su=0;
  for(let i of str){
    su=su+i;
  }
  function ave(){
    return su/str.length;
  }
  console.log("Sum =",su);
  console.log("Average = ",ave());
}
sum([1,2,3,4]);

////
function su(str){
  let sum=0;
  for(let i of str){
    sum=sum+i;
  }
  function ave(){
    return sum/str.length;
  }
  return {
    sumn:sum,
    average:ave()
  }
}
let res=su([1,2,3,4]);
console.log("Sum =",res.sumn);
console.log("Average = ",res.average);
////

{
  let a=34;
}
console.log(a);
////

function sum(){
  let as="Javascript";
}
console.log(as);
////


let str=[
  {
    name:"Anurag",
    score:40
  },
  {
    name:"Arun",
    score:60
  },
  {
    name:"Raju",
    score:81
  },
  {
    name:"Anu",
    score:21
  }
];
let re=str.map(function(na){
  return na.name;
});
let res=str.filter(function(sc){
  return sc.score>75;
});
let resu=str.reduce(function(sum,num){
  return  sum+num.score/str.length;
},0);
console.log(re);
console.log(res);
console.log(resu);


let result=str.map((num)=>{
  if(num.score >=90){
    return "A";
  }else if(num.score>=70){
    return "B";
  }else if(num.score>=50){
    return "C";
  }else if(num.score>=30){
    return "D";
  }else{
    return "E";
  }
});
console.log(result);


let ne=res.map(function(nd){
  return nd.name;
})

console.log(ne); 

////

 
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); 
console.log(add(2, 3));

///

  let c = 0;
function inc() {
    c++;
    return c;
}
console.log(inc());
console.log(inc());
///
function inv() {
  let d = 0;
    d++;
    return d;
}
console.log(inv());
console.log(inv());
///
let a=10;
console.log(a);
console.log(a++);
console.log(a);
console.log(--a);
console.log(a);
console.log(a--);
console.log(a);
//

function calculate(num1,num2,fin){
  // console.log(num1 + "+" + num2 +"=");
  fin(num1,num2);
}
function add(num1,num2){
  console.log(num1+ " + " + num2 +" = " +(num1+num2));
}
calculate(10,20,add);

//
function calculate(num1,num2,fin,gin){
  fin(num1,num2);
  gin(num1,num2);
}
function add(num1,num2){
  console.log(num1+num2);
}
function multiply(num1,num2){
  console.log(num1*num2);
}
calculate(10,20,add,multiply);
///

function ng(name,fin){
  console.log("Helllo"+ name );
  fin();
}
function si(){
  console.log("Ok");
}
ng("Anurag",si);
//
let atr=[16,2,3,4,5];
// let a=atr[4];
let [a, ,b]=atr
console.log(a,b);

//
let str={
  name:"Anurag",
  mark:89,
  age:19
};

let a=str.mark;
console.log(a);

//

function calculate(a,b,fi){
  fi(a,b);
}
function add(a,b){
  console.log(a+b);
}
// calculate(10,20,add);


//////