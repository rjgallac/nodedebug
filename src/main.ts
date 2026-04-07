import express from 'express'
const app = express()
const port = 3000
import type { Product } from './Product.js';
import pgPromise from 'pg-promise';

const pgp = pgPromise({}); // Initialization options
const db = pgp('postgres://postgres:password@nodedebug-postgres:5432/mydb');


app.get('/products', (req, res) => {
  let products: Product[] = [];
  db.many('SELECT * FROM products')
    .then((data) => {
      for (const product of data) {
        console.log(`Product: ${product.name}, Price: ${product.price}`);
        let p: Product = {
          name: product.name,
          price: product.price
        }
        products.push(p);
      }
      res.json(products);
    })
    .catch((error) => {
      console.log('ERROR:', error)
      res.status(500).send('Database error');
    })
})

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})