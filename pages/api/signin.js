import { Admin } from "@/models/Admin";

export default async function handle(req,res) {
    

   if(req.method === "POST"){
    try {
        const { email,password } = req.body;
        const admin = await Admin.findOne({email});
        console.log(admin)
        if(!admin){
            res.status(400).json({
                message: "Invalid Email!",
            });
        } else {
            if(admin?.password == password){
                res.status(200).json({message: "Login Successfully!"});
            } else {
                res.status(400).json({
                    message: "Invalid Password!",
                });
            }
        }

    } catch (error) {
        console.log(error);
    }
   }
}