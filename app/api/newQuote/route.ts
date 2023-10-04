import { NextRequest, NextResponse } from "next/server";
import newQuote from "../../data/quoteModel";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {

    const quote = await newQuote.create({
        customerId: "651d4ff70e9fc55913fdf10f",
        projectTitle: "test String",
        projectDescription: "test String",
        projectGoals: "test String",
        targetAudience: "test String",
        projectbudget: "test String",
        projectTimeline: "test String",
        

    });

    return NextResponse.json({quote});
  } catch (err) {
    console.error("Error in POST route:", err);

    return NextResponse.json({ message: "Internal server error" });
  }
};
