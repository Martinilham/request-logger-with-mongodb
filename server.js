import express from 'express';
import requestLogger from './middleware/logger/logger.js';
import './koneksi/database.js'

const app = express();

app.use(requestLogger({ methods: ['POST', 'PUT', 'GET', 'DELETE'] })); // log 

app.set('trust proxy', true);


// uji coba
app.post('/data', (req, res) => {
  res.send('Data diterima!');
});

app.post('/data', (req, res) => {
  res.send('Data diterima!');
});

// 0.0.0.0 agar bisa di akses satu jaringan beda device
app.listen(3000, '0.0.0.0', () => {
    console.log('Server jalan di http://localhost:3000');
  });
  
