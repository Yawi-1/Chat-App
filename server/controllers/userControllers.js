import User from "../models/userModels.js"
export const getAllUsers = async (req,res)=>{
     try {
      //   const loggedIdUser = req.user._id;
      //   const allUsers = await User.find({_id:{$ne:loggedIdUser}}).select("-password");
        const allUsers = await User.find({}).select("-password");
        return res.status(201).json(allUsers)
     } catch (error) {
        console.log('Error at getting all Users : ',error.message);
        res.status(400).json({error:'Server Error in getting All Users.  '})
     }
}
export const getUser = async (req,res)=>{
     try {
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({error:'User Not Found'})
        }
        return  res.status(201).json(user)
     } catch (error) {
        console.log('Error at getting single User : ',error.message);
        res.status(400).json({error:'Server Error'})
     }
}