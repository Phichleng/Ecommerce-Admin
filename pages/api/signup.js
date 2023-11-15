import {mongooseConnect} from "@/lib/mongoose";
import { Admin } from "@/models/Admin";

export default async function handle(req,res) {
    await mongooseConnect();
    if(req.method === "POST"){
        try {
            const {email,password } = req.body;
            const admin = await Admin.findOne({email});
            console.log(admin)
            if(!admin){
                    await Admin.create({email, password});
                    res.status(200).json({
                        message: "Sign Up Successfully!",
                        email: email,
                        password: password
                    })
            } else {
                res.json({message: "Email Is Already Exited"});
            }
        } catch (error) {
            res.json({msg: error});
        }
       }
 }