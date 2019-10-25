import { Request, Response } from "express";
import * as express from 'express';
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
import * as jwt from 'jsonwebtoken';
// import * as fs from "fs";

const app = express();

// app.use(bodyParser.json());

app.route('/dashboard')
    .post(loginRoute);

// const RSA_PRIVATE_KEY = fs.readFileSync('./demos/private.key');

export function loginRoute(req: Request, res: Response) {

    const email = req.body.email; 
    const password = req.body.password;

   
    const userId = email;//= findUserIdForEmail(email);

    // let jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
    //     algorithm: 'RS256',
    //     expiresIn: 120,
    //     subject: userId
    // }) 

}
