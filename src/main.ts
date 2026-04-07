import express from 'express'
const app = express()
const port = 3000
import type User from './User.ts';
import pgPromise from 'pg-promise';

const pgp = pgPromise({}); // Initialization options
const db = pgp('postgres://postgres:password@nodedebug-postgres:5432/mydb');   

app.get('/', (req, res) => {
  let user: User = {
    name: 'John Doe',
    id: 1
  };

  db.one('SELECT $1 AS value', 123)
    .then((data) => {
      console.log('DATA:', data.value)
    })
    .catch((error) => {
      console.log('ERROR:', error)
    })


  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})