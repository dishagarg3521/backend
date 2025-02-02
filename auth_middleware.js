import userModel from "../../model/model.js";
import jwt from 'jsonwebtoken'

var checkuserAuth = async(req,res,next)=>{
    let token
    const {authorization} = req.headers
    if(authorization && authorization.startWith('Bearer')){
        try{
            token = authorization.split(' ')[1]
            const {userID} = jwt.verify(token,"secretkey")
            console.log(UserID)
            const user = await userModel.findById(userID).select('-pass')
            req.user = user

        }
        catch(error){
            return res.status(401).send({error:"please authenticate"})

        }
    }
    if(!token){
        return res.status(401).send({"status":'failed',message: "unauthorized user"})
    }
    next()
}
export default checkuserAuth