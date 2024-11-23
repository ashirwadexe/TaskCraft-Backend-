import { User } from "../models/user.model";
import bcrypt from "bcrypt";

//REGISTRATION Logic
export const register = async (req, res) => {
    try {
        const { name, email, password} = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({
                message: "Something is missing!!!",
                success: false
            });
        }

        const user = await User.findOne({email});
        if(user) {
            return res.status(400).json({
                message: "user already exits !",
                success: false
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name, 
            email, 
            password: hashedPassword
        });

        return res.status(200).json({
            message: "Account created successfully",
            success: true
        });
    } catch (error) {
        console.error("Error during registration:", error);
    
        return res.status(500).json({
          message: "Server error. Please try again later.",
          success: false,
        });
      }
};