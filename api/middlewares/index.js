import jwt from 'jsonwebtoken';

export const log = (req, res, next) => {
    console.log(req.method, req.url, req.body);
    next();
}

export const timeout = async (req, res, next) => {
    return setTimeout(next, 3000);
}

export const isAuth = (req, res, next) => {
    if(req.headers.authorization) {
        try {
            const user = jwt.verify(req.headers.authorization, process.env.SECRET);
            console.log("IS AUTHED", user)  
            res.locals.user = user;
            next()
        } catch(err) {
            console.log(err)
            return res.send({success: false, error: "Please login."});
        }
        // next();
    } else {
        res.status(401).send({ success: false, error: 'Unauthorized' });
    }
}