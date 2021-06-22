import { Express, Request, Response } from 'express'

export default function (app: Express) {

    app.get('/check', (req:Request, res:Response) => res.sendStatus(200))

    //Register
    //Post /user

    //Login
    //Post /sessions

    //Get Sesssion
    //Get /sessions

    //Logout
    // Delete /sessions

    
}