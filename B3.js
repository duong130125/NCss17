"use strict";
var WeekDay;
(function (WeekDay) {
    WeekDay["Monday"] = "Monday";
    WeekDay["Tuesday"] = "Tuesday";
    WeekDay["Wednesday"] = "Wednesday";
    WeekDay["Thursday"] = "Thursday";
    WeekDay["Friday"] = "Friday";
    WeekDay["Saturday"] = "Saturday";
    WeekDay["Sunday"] = "Sunday";
})(WeekDay || (WeekDay = {}));
const printValue = (day) => {
    console.log(day);
};
let weekDays;
printValue(WeekDay.Monday);
printValue(WeekDay.Tuesday);
printValue(WeekDay.Wednesday);
printValue(WeekDay.Thursday);
printValue(WeekDay.Friday);
printValue(WeekDay.Saturday);
printValue(WeekDay.Sunday);
