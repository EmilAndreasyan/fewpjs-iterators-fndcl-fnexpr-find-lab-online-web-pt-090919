const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

// superbowlWin = (record) => {
//   let result = record.find(line => line.result === "W");
//   return !!result ? result.year : undefined
// }


superbowlWin = (record) => {
  let result = record.find(line => line.result === "W")
  if (result) {
    return  result.year
  } else {
    return undefined
  }
}

