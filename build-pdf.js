var pdf = require("pdf-creator-node")
const fs = require("fs")

const buildPDF = (clubStageBands, mainStageBands) => {
  const html = fs.readFileSync("pdf-template.html", "utf8")
  var document = {
    html: html,
    data: {
      clubStageBands: clubStageBands,
      mainStageBands: mainStageBands,
    },
    path: "./public/running-order.pdf",
  }
  pdf
    .create(document, { format: "A4", border: "10mm" })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.error(error)
    })
}

module.exports = buildPDF
