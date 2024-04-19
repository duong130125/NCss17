enum WeekDay {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}

interface Printer<T> {
    (arg: T): void;
}

const printValue: Printer<WeekDay> = (day) => {
    console.log(day);
};

let weekDays: WeekDay;

printValue(WeekDay.Monday);
printValue(WeekDay.Tuesday);
printValue(WeekDay.Wednesday);
printValue(WeekDay.Thursday);
printValue(WeekDay.Friday);
printValue(WeekDay.Saturday);
printValue(WeekDay.Sunday);
