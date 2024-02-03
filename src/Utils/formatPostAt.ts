const formatter = new Intl.RelativeTimeFormat(undefined, { numeric: "always" });
// numeric will decide how unit displayed

const DIVISION: { amount: number; name: Intl.RelativeTimeFormatUnit }[] = [
  { amount: 60, name: "second" },
  { amount: 60, name: "minute" },
  { amount: 24, name: "hour" },
  { amount: 7, name: "day" },
  { amount: 4.34524, name: "week" },
  { amount: 12, name: "month" },
  { amount: Number.POSITIVE_INFINITY, name: "year" },
];

export function formatPostAt(postedAt: Date) {
  const currTime = new Date();

  let timeDiff = (postedAt.getTime() - currTime.getTime()) / 1000;
  // getTime() turn Date into number(miliseconds timeStamp)
  // timeDiff formatted in negative stands for past time

  for (let i = 0, j = DIVISION.length; i < j; i++) {
    // using iteration to find the greates unit to implement
    if (Math.abs(timeDiff) < DIVISION[i].amount) {
      return formatter.format(Math.round(timeDiff), DIVISION[i].name);
      // Math.round turn digits into nearest integer
    }

    timeDiff /= DIVISION[i].amount;
  }
}
