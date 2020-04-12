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

function superbowWin(record) {
  let sadReality;
  record.find(function (line) {
    if (line.result === "W") {
      return line.year
    } else {
      sadReality = undefined;
      return sadReality;
    }
  })
}
superbowWin(record)

function superbowWin = (record) => {
  let result = record.find(record => record.result === "W")
  return !!result ? result.year : undefined
}

