let raceNumber = Math.floor(Math.random() * 1000);
let registredEarly = true;
const age = 26 ;
if (age > 18 && registredEarly === true) {
raceNumber += 1000;
}
if (age > 18 && registredEarly === true) {

  console.log(`You will race at 9:30 am, and your race number is ${raceNumber}.`);
  } else if (age > 18 && registredEarly === false) {

    console.log(`You will race at 11:00 am, and your race number is ${raceNumber}.`);
  }
if (age < 18) {
  console.log(`You will race at 12:30 pm, and your race number is ${raceNumber}.`);
}
else if (age === 18){
  console.log('Please check with the registration desk !');
}