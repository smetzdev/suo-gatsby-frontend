var pdf = require("pdf-creator-node")
const fs = require("fs")

const buildPDF = async (clubStageBands, mainStageBands) => {
  const html = fs.readFileSync("pdf-template.html", "utf8")
  var document = {
    html: html,
    data: {
      clubStageBands: clubStageBands,
      mainStageBands: mainStageBands,
    },
    path: "./public/downloads/running-order.pdf",
  }

  const response = await pdf.create(document, { format: "A4", border: "10mm" })

  return response
}

module.exports = buildPDF
