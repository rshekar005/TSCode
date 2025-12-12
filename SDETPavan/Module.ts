export let appname:string="Calculator"

export function add(a:number,b:number){
    return a+b;
}

export class Formatter{

   static toupper(name:string):string{
        return name.toUpperCase();
    }
}