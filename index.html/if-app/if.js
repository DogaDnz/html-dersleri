let name = prompt("Please enter your name");
let ID =prompt("Please enter your ID");

person(name,ID);

function person(name,ID){
 
    if(name!=""){
        if(ID.length==11&& !isNaN(ID)){
        console.log("Thank you.");
        }
        else{
      console.log("Please enter 11 numbers.");
        }
       
    }
    else{
     console.log("Please write a name!!");
    }

}

