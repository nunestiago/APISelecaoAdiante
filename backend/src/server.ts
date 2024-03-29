import express from 'express';
import 'express-async-errors';

import './database/connection';
import routes from './routes/router';
import errorHandler from './errors/handler';

const app = express();
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(3333);
