
function isFriday(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = date.getDay()
    if (days[d] == "Friday") {
        return true 
    }
    return false 
}

function isWeekend(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     let d = date.getDay()
    if (days[d] == "Sunday" || days[d] == "Saturday") {
        return true 
    }
    return false
}

function isLeapYear(date) {
    const year = date.getFullYear()
    if ((Number(year) % 4 === 0 && Number(year) % 100 !== 0 ) || Number(year) % 400 === 0 ) {
        return true 
    }
    return false 
}

function isLastDayOfMonth(date) {
      return date.getDate() === new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}



console.log(isFriday(new Date("2024-03-01"))); 
// expected: true   (March 1, 2024 is a Friday)

console.log(isFriday(new Date("2024-03-02"))); 
// expected: false  (Saturday)

console.log(isWeekend(new Date("2024-03-02"))); 
// expected: true   (Saturday)

console.log(isWeekend(new Date("2024-03-01"))); 
// expected: false  (Friday)

console.log(isLeapYear(new Date("2024-01-01")));  
// expected: true   (2024 is leap)

console.log(isLeapYear(new Date("2023-01-01")));  
// expected: false  (2023 is not leap)

console.log(isLastDayOfMonth(new Date("2024-02-29"))); 
// expected: true   (Leap year February ends on 29)

console.log(isLastDayOfMonth(new Date("2024-02-28"))); 
// expected: false  (Not last day in leap year)



/*
It is divisible by 4, and

Not divisible by 100, unless

It is also divisible by 400
*/