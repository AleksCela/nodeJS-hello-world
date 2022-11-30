import express from 'express'
import fsp from "fs/promises";
import sumOfArray from "./functions.js";
const app = express()
const port = 3000
const hostname = '127.0.0.1';

app.get('/unique', async (req, res) => {
    const content = await fsp.readFile('./file.csv', 'utf-8')
    const array = content.split("\r\n")
    const unique = array.filter((item, index, arr) => arr.indexOf(item) === index)
    console.log(unique);
    res.send("the unique values of " + content + " are " + unique)
})

app.get('/sum', async (req, res) => {
    const content = await fsp.readFile('file.csv', 'utf-8')
    const array = content.split("\r\n")
    const arrayOfNum = []
    for (const number of array) {
        arrayOfNum.push(Number(number))
    }
    const theSum = sumOfArray(arrayOfNum)
    res.send(content + " The sum => " + theSum)
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})