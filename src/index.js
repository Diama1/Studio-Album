import 'dotenv/config';
import express from 'express';
import api from './api/routes/index';
import './handler/cloudinaryConfig';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', api);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port: ${port} `);
});
export default app;
