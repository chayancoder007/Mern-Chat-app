/// JWT 
import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) =>{
    const token = jwt.sign({userId},process.env.JWT_SECRET, {
        expiresIn: "15d",
    
   });

   res.cookie("jwt",token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, //it means the cookie is accessible only through HTTP(S) and
    sameSite: "strict", // CSRF attacks cross-side request
    secure: process.env.NODE_ENV !== "devlopment",
    });
   };

   export default generateTokenAndSetCookie;