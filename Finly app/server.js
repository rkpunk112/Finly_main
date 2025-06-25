import morgan from 'morgan';
import './libs/db.js';
import './load.js';
import express from 'express';
import userRouter from './routes/useroute.js';

const app = express();
app.use(morgan('dev')); 
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { message: 'Main Page' });
});

app.get('/about', (req, res) => {
  res.render('index', { message: 'About Page' });
});

app.get('/home', (req, res) => {
  res.render('index', { message: 'Home Page' });
});

app.use('/users', userRouter);

app.use((req, res) => {
  res.status(404).render('index', { message: '404 Not Found' });
});

const PORT= 5001;
app.listen(PORT, ()=>{
  console.log(`Server is running at http://localhost:${PORT}/`);
});