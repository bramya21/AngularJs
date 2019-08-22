/*create class*/
// function class1()
// {
//     this.propertyName="It's Ramya";
//     this.fun=function()
//     {
//         console.log("js function");
//     }
// }
// var obj=new class1();
// console.log(obj);
// console.log(obj.fun());


/*working on datatypes*/
// var a:number =12;
// var b:string="ramya bijja";
// var arr:string[]=["a","b","c"];
// var obj1:any={key:'value'};
// console.log(a);
// console.log(b);
// console.log(arr);
// console.log(obj1);



/*working on functions*/
// function fun():string
// {
//     return "Trying to have fun..";
// }
// var fundo:any=function():string
// {
//     return "Haha";
// }
// console.log(fun());
// console.log(fundo());



// /*functions with  parameters*/
// function UsingParams(pRequired:boolean,pDefault:string="DBS-ID",pOptional?:number,...pRest:number[])
// {
//     console.log(pRequired);
//     console.log(pDefault);
//     console.log(pOptional);
//     console.log(pRest);
//     //console.log(pRest1);

// }
// UsingParams(true,"DBS-491767",100,1,2,3,4);

// function arrayParams(pArr:string[]){console.log(pArr)}
// function restParms(...pRest:string[]){console.log(pRest)}
// var arry=['1','2','3'];
// arrayParams(arry);
// restParms('1','2','3','4','5');


// /*function currying*/
// console.log((function complicated()
// {
//     console.log("outer function");
//     return function(){
//         console.log("inner function result");
//         return function(pName:string)
//         {
//             return "Hello "+pName;
//         }
//     }
// }()()("Ramya")));
// console.log(complicated()()("Ramya")); //currying of functions


// /*self invokable function  (function implementation)();*/
// var f=(function(){
//     console.log("self invoked function");
//     return "a value";
// })();

// console.log(f);

/*lambda function       ()=>value to return*/

// var f1=()=>{
//     console.log("A function");
//     return "value";
// }
// console.log(f1());
// ()=>"lambdademo";
// var out=function(a)
// {
//     return function(x,y)
//     {
//         return x+y+a;
//     }
// }
// //var out=(a)=>(x,y)=>x+y+a;
// console.log(out(10)(20,30));




/*bodmas operations for 3+2*5 exp using lambda*/
var s:string="3+2*5";
for(var i=0;i<s.length;i++)
{
    if(s[i]=='+')
        console.log(`(${s[i-1]},${s[i+1]})=>${s[i-1]}+${s[i+1]}`);
    else if(s[i]=='*')
        console.log(`(${s[i-1]},${s[i+1]})=>${s[i-1]}*${s[i+1]}`);
}
