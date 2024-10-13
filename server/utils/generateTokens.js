import jwt from 'jsonwebtoken'

const generateTokensAndSetCookie =(userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET_KEY,{expiresIn:'1d'})
    res.cookie('jwt',token,{
        httpOnly:true, //prevent XSS attacks
        maxAge:1000*60*60*24,
        sameSite:"strict",
    });
};

export default generateTokensAndSetCookie;