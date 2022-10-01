import dotenv from 'dotenv';
import process from 'process';
import express from 'express';
import router from './router/Router.js';
import cors from 'cors';

dotenv.config();
let cf = process.env;

async function initApplication() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(router);
    app.listen(cf.port,cf.host,()=>{
        console.log(`Web start in ${cf.host}:${cf.port}`)
    });
}
initApplication();