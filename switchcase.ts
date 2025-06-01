let day:string = "saturday";
let dayOfWeek: string;
if(day==="sunday"){
    dayOfWeek = "sunday"
} else if ( day==="monday"){
    dayOfWeek = "monday"
}else if ( day==="tuesday"){
    dayOfWeek = "tuesday"
}else if ( day==="wednesday"){
    dayOfWeek = "wednesday"
}else if ( day==="thursday"){
    dayOfWeek = "thursday"
}else if ( day==="friday"){
    dayOfWeek = "friday"
}else if ( day==="saturday"){
    dayOfWeek = "saturday"
}else{
   dayOfWeek="Invalid day"
}

console.log(" Day of the week is " + dayOfWeek)


// switch case
let myday:string= "wednesday";

switch(myday){
    case "sunday" :{
        console.log("its sunday")
         break;
    }
    case "monday" :{
        console.log("its monday")
        break;
    }
    case "tuesday" :{
        console.log("its tuesday")
        break;
    }
    case "wednesday" :{
        console.log("its wednesday")
        break;
    }
    case "thursday" :{
        console.log("its thursday")
        break;
    }
    case "friday" :{
        console.log("its friday")
        break;
    }
    case "saturday":{
        console.log("its saturday")
        break;
    }
    default:{
        console.log("Invalid day")
        break;
    }
}

// switch case with enums

enum Browser{
    firefox ="firefox",
    chrome = "chrome",
    edge = "edge"
}

let browserName:string=Browser.firefox;
switch(browserName){
    case Browser.firefox:{
        console.log("launch firefox")
        break;
    }
    case Browser.chrome:{
        console.log("launch chrome")
        break;
    }
    case Browser.edge:{
        console.log("launch edge")
        break;
    }
    default:
        console.log("Inavlid browser")
        break;
}

// RBAC -- Roll based admin control: admin , seller, partner, sender, cat manager
// multi env -- DEV, QA, UAT, PROD  

let environment:string= "DEV";
switch(environment){
    case "DEV":
        console.log("Script running in DEV environment")
        break;
    case "QA":
        console.log("Script running in QA environment")
        break;
    case "UAT":
        console.log("Script running in UAT environment")
        break;
    case "PROD":
        console.log("Script running in PROD environment")
        break;
    default:
        console.log("Enter valid environment")
        break;
}