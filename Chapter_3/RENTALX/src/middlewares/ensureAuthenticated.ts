import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    //Dentro do header => Bearer restodotoken

    const authHeader = request.headers.authorization;

    if(authHeader) {
        throw new Error("Token missing.");
    }

    //Bearer haushuaghsuhusgaygsh => [0, 1]
    const [, token] = authHeader.split(" ");

    verify(token, "")
}
