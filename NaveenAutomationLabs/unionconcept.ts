// Here userId can be anything either between string / number but not boolean.
// In java it is not possible

let userId:(string | number) ; 
userId =10000;
userId= "Naveen Automation labs"
// userId = true; It throws CT error

function getCustomerID(customerID :(string|number)){
  if(typeof(customerID)==='number'){
        return customerID +"_naveen";
  }else if(typeof(customerID)==='string'){
        return customerID+"_naveen"
  }

}

console.log(getCustomerID(1));
console.log(getCustomerID("Automation"));