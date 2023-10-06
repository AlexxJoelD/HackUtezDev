import * as dotenv from 'dotenv';
import express, {Application, Request, Response} from 'express';
import cors from 'cors';

import cashRoutes from "../modules/cash/adapters/cash.routes";
dotenv.config();

const PORT = process.env.PORT || 3000;
const API = process.env.API || 'cash';

const app: Application = express();
app.set('port', PORT);

app.use(cors({
    credentials: true,
    origin: '*'
}))

app.use(express.json({limit: '60mb'}));
app.use(express.urlencoded({extended: false}))
app.use(express.static('documents'));

app.get('/test', (req: Request, res: Response) => res.send('Welcome to Interface Cash'))

app.use(`/${API}/paymemt `, cashRoutes);

app.get('*', (req: Request, res: Response) => res.status(404).send('Page Not Found'))

export default app;