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

superbowWin = (record) => {
  let result = record.find(line => line.result === "W")
  return !!result ? result.year : undefined
}

