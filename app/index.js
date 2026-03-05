const express = require('express');
const { Pool } = require('pg');
const app = express();
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'webapp',
  password: 'password',
  port: 5432,
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Hello Dockr! DB time: ${result.rows[0].now}`);
  } catch (err) {
    res.status(500).send('DB error: ' + err.message);
  }
});

app.listen(3000, () => console.log('App on 3000'));
