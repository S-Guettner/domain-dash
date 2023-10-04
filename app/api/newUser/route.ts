import { NextRequest, NextResponse } from 'next/server';

import user from '../../data/userModel'
import bcrypt from "bcrypt";

export const POST = async (req: NextRequest, res: NextResponse) => {
    const { email,password, userType } = await req.json();


    try {
        
        const userCheck = await user.findOne({ email: email });
        
        if (!userCheck) {
        
            const hashedPassword = await bcrypt.hash(password, 10)
            console.log(hashedPassword)

            const newUser = await user.create({
                email: email,
                password:hashedPassword,
                userType: userType,
            });
        
            return NextResponse.json({ newUser });
        
        } else {
        
            return NextResponse.json({message:"User already exists"})
        
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json(error)

    }


 
};