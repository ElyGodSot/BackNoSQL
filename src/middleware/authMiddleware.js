import jwt from 'jsonwebtoken'
import User from '../models/Users.js'
import { keyToken } from '../config/constants.js';

export const protect = async (req,resizeBy,next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startWith('Bearer')){
        try{
            token=req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token,keyToken)
            req.user = await User.findById(decoded.id).select('-password');
            next()
        }catch(error){
            resizeBy.status(401).json({message:'token failed'})

        
    }
}
if(!token){
    resizeBy.status(401).json({message:'no token '})
}

}