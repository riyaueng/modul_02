type TweeklyMeeting = {
  title: string
  startDate: Date
  weekday: string
}

// Es gibt keine Vorgaben für die Schreibweise des Wochentages
// An verschiedenen Stellen im Code kann hier verschiedenes stehen

const dailyMeet: TweeklyMeeting = {
  title: "Daily",
  startDate: new Date(),
  weekday: "Monday",
}

const TW_Meet: TweeklyMeeting = { title: "TrainersWeekly", startDate: new Date(), weekday: "Dienstag" }

const FeedBack_Meet: TweeklyMeeting = { title: "Feedback", startDate: new Date(), weekday: "Friday" }

//  * enum -> Eine vordefinierte Auflistung von Werten hinter denen NUmber stecken

enum Weekday {
  Monday, // 0
  Tuesday, // 1
  Wednesday, // 2
  Thursday, // 3
  Friday, // 4
  Saturday, // 5
  Sunday, // 6
}

console.log(Weekday)

for (const weekday in Weekday) {
  console.log(weekday)
}

type TweeklyMeeting2 = {
  title: string
  startDate: Date
  weekday: Weekday
}
const vorlesung: TweeklyMeeting2 = {
  title: "Retro",
  startDate: new Date(),
  weekday: Weekday.Monday,
}

switch (vorlesung.weekday) {
  case Weekday.Monday:
    console.log("Heute ist Montag")
    break
  case Weekday.Tuesday:
    console.log("Am Dienstag ist die Vorlesung")
    break
  default:
    console.log("Ungültiger Tag")
    break
}

// ! Beispiel 2

enum OrderStatus {
  Created,
  Accepted,
  InProgress,
  InDelivery,
  Cancelled,
  Deleted,
}

// Das enum OrderStatus können wir jetzt in unserem Type Bestellungen (shopOrder) verwenden
// Alle die mit shopOrder arbeiten, können jetzt nur sinnvolle Werte im Feld eingeben

type TShopOrder = {
  number: number
  customerNumber: number
  status: OrderStatus
}

const order477: TShopOrder = {
  number: 477,
  customerNumber: 5433,
  status: OrderStatus.Created,
}

console.log(order477)

order477.status = OrderStatus.Accepted

console.log("Bezeichnung vom Orderstatus direkt: ", OrderStatus[1])
console.log("Bezeichnung vom Orderstatus über Variable", OrderStatus[order477.status])

// Wenn wir keine eigene Werte angeben, wird bei einem enum automatisch 0, 2, 3, … durchnummeriert
// Wenn wir aber eigene Werte vergeben, indem wir sie mit = dahinter speichern lassen

enum httpStatusCode {
  OK = 200,
  Created = 201,
  BADGATEWAY = 400,
  NOTFOUND = 404,
}

console.log(httpStatusCode)
