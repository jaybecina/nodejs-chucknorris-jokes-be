import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/routes';

dotenv.config();

const app = express();

const port = 8080;

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/jokes', routes);

app.listen(port, () => console.log(`Server running on port ${port}`));