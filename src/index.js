import express from 'express'
import cors from 'cors';
import { login } from './controllers/sessions-controller.js';
import { Router } from "express";

const app = express()
const routes = Router();

app.use(express.json())
app.use(cors());

routes.post('/login', login)
app.use('/', routes);

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)
