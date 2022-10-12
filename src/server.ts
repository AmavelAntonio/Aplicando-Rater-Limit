"use strict"
import express from 'express';
//import router from './router/router';
import cors from 'cors';
import helmet from 'helmet';
//import { rateLimit } from './Password/ratelimit'
const app = express();
const port = 2000;


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//app.use(router);
app.use(helmet());
app.use(helmet.contentSecurityPolicy());
app.use(helmet.crossOriginEmbedderPolicy());
app.use(helmet.crossOriginOpenerPolicy());
app.use(helmet.crossOriginResourcePolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.originAgentCluster());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());




app.listen(port, ()=> {
    console.log('Server is Running in port 2000');
})