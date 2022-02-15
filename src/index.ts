import express from 'express';
import {traderRoutes} from './routes/trades.routes';

import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use("/trades",traderRoutes);

app.listen(port);



