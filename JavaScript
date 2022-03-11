let raceNumber = Math.floor(Math.random() * 1000);

let early = true;
let runAge = 20;
//check early register AND an adult
if (early && runAge > 18) {
  raceNumber += 1000
}
//registration time to determine race time

if (!early && runAge > 18) {
  console.log(`Your race number is ${raceNumber} and your race time is 11:00 am`)
}
else if (early = true && runAge > 18) {
  console.log(`Your race numer is ${raceNumber} and your race time is 9:30 am.`)
} 
else if (runAge < 18) {
  console.log(`Your race number is ${raceNumber} and your race time is 12:30 pm`)
} 
else {
  console.log("Please see the registration desk.")
}


