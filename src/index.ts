import express from 'express';
import {traderRoutes} from './routes/trades.routes';

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/trades",traderRoutes);

app.listen(port);



