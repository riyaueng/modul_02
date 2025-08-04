import { Weekday } from "./enum"

for (const day in Weekday) {
  console.log(day)
}

enum Month {
  January,
  February,
  March,
  April,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

for (const monthname in Month) {
  console.log(monthname)
}
