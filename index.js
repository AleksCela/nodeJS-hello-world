import express from 'express'
import fsp from "fs/promises";
const app = express()
const port = 3000
const hostname = '127.0.0.1';

app.get('/', async (req, res) => {
    const content = await fsp.readFile('./index.html', 'utf-8')
    res.send(content)
})

app.get('/about', async (req, res) => {
    const content = await fsp.readFile('./about.html', 'utf-8')
    res.send(content)
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})