"use server";
import connectDB from "@/app/lib/connectDB";
import Contact from "@/app/model/contactModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { name, email, phone, message } = await request.json();
     
        try {
            await connectDB();
            await Contact.create({
                name,
                email,
                phone,
                message
            })
            return NextResponse.json({ success: true, message: "Message sent successfully" });
        } catch (error) {
               if(error instanceof mongoose.Error.ValidationError){
                let errorList:string[] = [];
                for(let key in error.errors){
                    errorList.push(error.errors[key].message)
                }
                console.log(errorList);
               }
        }
    
}