// Block code where we write a bussiness logic

// named function:
function getInfo(){  // 0 parameter function.
    console.log(" Hello info ");
}

getInfo();

function add(a:number, b:number):number{ // Parameter function
    return a+b;
}

console.log(add(10,20));

function isUserActive(userName:string):boolean{
    if(userName==="Rajashekar"){
        return true;
    }else if(userName==="Tom"){
        return false;
    }else{
        console.log(userName + " is not available ")
        return false;
    }
}

console.log(isUserActive("Rajashekar"));
if(isUserActive("Rajashekar")){
    console.log("Login with Rajashekar")
}

console.log(isUserActive("Peter"));
if(isUserActive("Peter")){
    console.log("Login with Peter")
}

// Anonymous function: without name function
let info=function(){
    console.log("Hello typescript!!!")
}

info();

let sum = function(x:number, y:number):number{
    return x+y;
}

console.log(sum(5,6));