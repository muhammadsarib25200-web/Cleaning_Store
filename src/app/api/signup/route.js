import connectdb from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
export async function POST(request){
    try{
     await connectdb();
     const{name, email, password} = await request.json();
     if(!name || !email || !password){
        return Response.json(
            {message:"All fields are required"},
            {status:400}
        );
     }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return Response.json(
          { message: "Email already registered" },
          { status: 400 }
            );
        }

        const hashesdPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password : hashesdPassword,
        });

        return Response.json(
            {
                message : "User registered succesfully",
                user:{
                    id: user._id,
                    name : user.name,
                    email : user.email,
                },
            },
            {status : 201}
        );

    }catch(error){
        console.log("Signup Error", error);
        return Response.json(
            {message : "something went wrong"},
            {status : 500}
        )
    }
} 