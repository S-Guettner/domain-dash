import { NextRequest, NextResponse } from 'next/server';
import newRequest from '../../data/requestModel'

export const POST = async (req: NextRequest, res: NextResponse) => {

try {
    const request = await newRequest.create({
        quoteId: "651d54820e9fc55913fdf11e",
        requestContent:"wasefesfsefseertetetfse"

    });

return NextResponse.json({request });
    } catch (err) { 

console.error('Error in POST route:', err);

 return NextResponse.json({ message: 'Internal server error' });
 }
};