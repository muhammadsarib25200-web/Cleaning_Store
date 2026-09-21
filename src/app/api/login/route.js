import connectdb from "@/lib/db"
import User from "@/models/User";
import bcrypt from "bcryptjs";
export async function POST(request){
    try{
        await connectdb();
        const {email, password} = await request.json();
        if(!email || !password){
            return Response.json(
                {message : "Email and password are required"},
                {status : 400}
            );
        }

        const user = await User.findOne({email});
        if(!user){
            return Response.json(
                {message : "User not found"},
                {status : 400}
            );
        }
      const isMatch = await bcrypt.compare(
      password,
      user.password
      );
        if(!isMatch){
            return Response.json(
                {message : "Invalid password"},
                {status : 401}
            );
        }
        return Response.json(
            {
                message : "Login successful",
                user : {
                    id : user._id,
                    name : user.name,
                    email : user.email,
                },
            },
            {status : 200}
        );
    }catch(error){
     console.log("Login error", error);
     return Response.json(
        {message : "something went wrong"},
        {status : 500}
     );
    }
}