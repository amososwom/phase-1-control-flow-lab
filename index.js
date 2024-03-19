function scuberGreetingForFeet(somevalue){
  // Write your code here!
  let testGreeting = "It was Good";

  if(somevalue <= 400 ){
    testGreeting = "This one is on me!";
  }else if( somevalue >= 400 && somevalue <= 2000 ){
    testGreeting = "That will be twenty bucks.";
  }else if(somevalue >= 2000 && somevalue <= 2500){
    testGreeting = "I will gladly take your thirty bucks.";
  }else{
    testGreeting = "No can do.";
  }

  return testGreeting;
}

//console.log(scuberGreetingForFeet(7000));

function ternaryCheckCity(destination){
  // Write your code here!
  let cantGo = "No go.";
  let canGo = "Ok, sounds good.";
  return (destination == "NYC") ? canGo: cantGo;
}

//console.log(ternaryCheckCity("NYC"));

function switchOnCharmFromTip(response){
  // Write your code here!

 let newrespone = "Bye.";

    switch (response) {
      case "generous":
        newrespone =  "Thank you so much.";
        break;
      case "not as generous":
        newrespone =  "Thank you.";
        break;
        case "thanks for everything":
          newrespone =  "Bye.";
          break;
      default:
        newrespone =  "Bye.";
        break;
    }

    return newrespone;               
}

console.log(switchOnCharmFromTip("generous"));