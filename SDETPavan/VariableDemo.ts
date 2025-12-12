/*
Var keyword: Var is both functional and block scoped. If we declare a variable with var inside a function, it is functional scoped. If we declare a variable with var inside a block, it is still functional scoped.
Re-declaration and Re-initialization is possible with var keyword.   
Hoisting is possible with var keyword.
*/

function varScope(){
    if(true){
        var mesg="Hello world!!!";  // block scoped
        console.log(mesg); //Here mesg is accessible inside the block
    }

    console.log(mesg);      // Here mesg is accessible outside the block as well because var is function scoped

    var mesg="Welcome to TypeScript"; // functional scoped
    console.log(mesg);    // Re-declaration is possible with var keyword
    mesg="Enjoy Learning TypeScript";
    console.log(mesg);    // Re-initialization is possible with var keyword

    //Hoisting example
    // Using var before its declaration evaluates to undefined at runtime; suppress TS 'used before assigned' here
    // @ts-ignore: demonstrative hoisting example
    console.log(hoistVar); //undefined
    var hoistVar=100;
    console.log(hoistVar); //100
}

varScope();

/*
Let keyword: Let is block scoped. If we declare a variable with let inside a function, it is functional scoped. If we declare a variable with let inside a block, it is block scoped.
Re-declaration is not possible with let keyword. Re-initialization is possible with let keyword.  
Hoisting is not possible with let keyword.
*/

function letScope(){
    if(true){
        let mesg="Hello world!!!"; // block scoped
        console.log(mesg); //Here mesg is accessible inside the block
    }
    let msg="Welcome to TypeScript"; // functional scoped
    //let mesg="Enjoy Learning TypeScript"; // Re-declaration is NOT possible with let keyword
    msg="Enjoy Learning TypeScript";
    console.log(msg);    // Re-initialization is possible with let keyword
    //console.log(mesg);      // Here mesg is NOT accessible outside the block as let is block scoped

    //Hoisting example
    //console.log(hoistLet); //Error: Cannot access 'hoistLet' before initialization
    let hoistLet=200;
    console.log(hoistLet); //200
}

letScope();

/*
Const keyword: Const is block scoped. If we declare a variable with const inside a function, it is functional scoped. If we declare a variable with const inside a block, it is block scoped.
Re-declaration and Re-initialization is not possible with const keyword.  
Hoisting is not possible with const keyword.
*/
function constScope(){
    if(true){
        const mesg="Hello world!!!";  // block scoped
        console.log(mesg); //Here mesg is accessible inside the block
    }   
    const msg="Welcome to TypeScript"; // functional scoped
    //const msg="Enjoy Learning TypeScript"; // Re-declaration is NOT possible with const keyword
    //msg="Enjoy Learning TypeScript"; // Re-initialization is NOT possible with const keyword
    console.log(msg);    
    //console.log(mesg);      // Here mesg is NOT accessible outside the block as const is block scoped

    //Hoisting example
   // console.log(hoistConst); //Error: Cannot access 'hoistConst' before initialization
    const hoistConst=300;
    console.log(hoistConst); //300
}

constScope();

//Summary of var, let and const keywords
function scopedifference(){
    var x=10;
    let y=20;
    const z=30; 
    console.log(x);  //10
    console.log(y);  //20
    console.log(z);  //30   

    if(true){
        var a=100;
        let b=200;
        const c=300; 
        console.log(a);  //100
        console.log(b);  //200
        console.log(c);  //300
    }

    console.log(a);  //100 as var is function scoped
    //console.log(b);  //Error as let is block scoped
    //console.log(c);  //Error as const is block scoped

}

scopedifference()