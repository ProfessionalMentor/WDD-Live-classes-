import express from "express"

const route = express.Router()

route.get('/', (req, res) => {
  res.send('Hello WDD Members')
})

route.get('/about', (req, res) => {
  res.send('Hello this is about page of WDD Members')
})


export {route}