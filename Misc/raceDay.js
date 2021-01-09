let raceNumber = Math.floor(Math.random() * 1000);
const earlyReg = true;
const runnerAge = 25;
if (runnerAge > 18 && earlyReg == true){
  raceNumber += 1000;
}
if (runnerAge > 18 && earlyReg == true) {
  console.log(`Your race start time is 9\:30am, and your race number is ${raceNumber}`);
} else if (runnerAge > 18 && earlyReg != true) {
  console.log(`Late adults race start time is at 11\:00am. Your race number is ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Youth runner race start time is is 12\:30pm. Your race number is ${raceNumber}`)
} else if (runnerAge == 18) {
  console.log('Please see the registration desk')
}