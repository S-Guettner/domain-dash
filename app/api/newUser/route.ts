import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import user from '../../data/userModel'

export const POST = async (req: NextRequest, res: NextResponse) => {
    const { email,password, userType } = await req.json();

console.log(email)

    try {
        const userCheck = await user.findOne({ email: "email" });
        console.log(userCheck)
        if (!userCheck) {
            const newUser = await user.create({
                email: email,
                password:password,
                userType: userType,
            });
/*             console.log(newUser);
            console.log('User not in DB'); */
            return NextResponse.json({ newUser });
        } else {
            console.log('User already in DB');
            return NextResponse.json(userCheck)
        }


    } catch (error) {
        console.log(error);
        return NextResponse.json(error)

    }


 
};