import express from 'express';

const app = express();
const port = process.env.NODE_ENV || 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
