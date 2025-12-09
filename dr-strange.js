function addWeek(date) {
    const week14 = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday",
        8: "secondMonday",
        9: "secondTuesday",
        10: "secondWednesday",
        11: "secondThursday",
        12: "secondFriday",
        13: "secondSaturday",
        14: "secondSunday",
    };

  
    
    const epoch = new Date('0001-01-01');
    
    const diffInMs = date - epoch;
    
    const d = Math.floor(diffInMs / (1000 * 60 * 60 * 24)) + 1;
   
    let day = d%14
   if (day === 0) {
      day = 14
    }
    return week14[day]
}

function timeTravel({ date, hour, minute, second }) {
    date.setHours(hour)
    date.setMinutes(minute)
    date.setSeconds(second)
    return date
}


// Tests for addWeek
console.log(addWeek(new Date('0001-01-01'))); // Expected: Monday
console.log(addWeek(new Date('0001-01-02'))); // Expected: Tuesday
console.log(addWeek(new Date('0001-01-07'))); // Expected: Sunday
console.log(addWeek(new Date('0001-01-14'))); // Expected: secondMonday
console.log(addWeek(new Date('0001-01-09'))); // Expected: secondTuesday

// Tests for timeTravel
console.log(
  timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
  }).toString()
); 
// Expected: Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)


