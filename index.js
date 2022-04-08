function scuberGreetingForFeet(someValue){
  let chargeResponse;
  if (someValue <= 400) {
    chargeResponse = `This one is on me!`;
  }
  else if (someValue <= 2000) {
    chargeResponse = `That will be twenty bucks.`;
  }
  else if (someValue <= 2500) {
    chargeResponse = `I will gladly take your thirty bucks.`;
  }
  else if (someValue > 2500) {
    chargeResponse = `No can do.`;
  }
  return chargeResponse;
}

function ternaryCheckCity(someCity){
  let cityResponse;
  someCity === "NYC" ? (cityResponse = "Ok, sounds good.") : (cityResponse = "No go.");
  return cityResponse;
}

function switchOnCharmFromTip(someTip){
  let tipResponse;
  switch (someTip) {
    case "generous" :
      tipResponse = "Thank you so much.";
      break;
    case "not as generous" :
      tipResponse = "Thank you.";
      break;
    default :
      tipResponse = "Bye.";
      break;
  }
  return tipResponse;
}