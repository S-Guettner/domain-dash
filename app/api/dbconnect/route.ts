import { NextRequest, NextResponse } from "next/server";
import connectionToDB from "@/app/DB/dbConnection";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    connectionToDB()
    return NextResponse.json({message: "YES SIR!"});
  } catch (err) {
    console.error("Error in POST route:", err);

    return NextResponse.json({ message: "Internal server error" });
  }
};
