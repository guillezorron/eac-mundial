import express from 'express'
import cors from 'cors';
import { login } from './controllers/sessions-controller.js';
import { indexGroups } from './controllers/groups-controller.js';
import { Router } from "express";

const app = express()
const routes = Router();

app.use(express.json())
app.use(cors());

routes.post('/login', login)
routes.get('/groups', indexGroups)
app.use('/', routes);

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)
