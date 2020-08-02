const puppeteer = require("puppeteer")
const http = require("http")

const screenshot = async (
  bandNameArray,
  date,
  location,
  title,
  description
) => {
  const paramObject = {
    date,
    location,
    title,
    description,
    bands: bandNameArray.join(","),
  }
  const searchParams = new URLSearchParams(paramObject)
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  page.setViewport({ width: 1024, height: 512 })
  await page.goto(`file://${__dirname}/index.html?${searchParams.toString()}`)
  await page.screenshot({ path: "./public/suo-preview.jpg" })

  await browser.close()

  return "Screenshot Finished!"
}

module.exports = screenshot
