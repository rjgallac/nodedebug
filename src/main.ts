import express from 'express'
const app = express()
const port = 3000
import type User from './User.ts';

app.get('/', (req, res) => {
  let user: User = {
    name: 'John Doe',
    id: 1
  };
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})