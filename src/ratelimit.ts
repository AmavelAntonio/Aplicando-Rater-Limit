import rateLimit from 'express-rate-Limit'; 
import { Request, Response} from 'express';

const rateLimiter = rateLimit ({ 
    windowMs: 1 * 60 * 1000, 
    max: 6, 
    keyGenerator(req: Request): string{ 
        return req.ip
    }, 
    handler(_, res: Response): void{
        res.status(429).send('Too many requests to the /forecast endpoint')
    }
})

export{ 
    rateLimit
};