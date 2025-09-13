import User from "../models/User.js";

// Update User CartData : /api/cart/Update
export const updateCart = async(req,res) =>{
    try {
        const {userId,cartItem} = req.body;
        await User.findByIdAndUpdate(userId,{cartItem})
        res.json({succes:true,message:"Cart Updated"})
    } catch (error) {
        console.log(error.message);
        res.json({succes:false,message:error.message})
    }
}