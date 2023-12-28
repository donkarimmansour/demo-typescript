import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    
  console.log(request.nextUrl.searchParams.get("n"));
  

  const n: string | null = request.nextUrl?.searchParams.get("n")
  

  const data: string = "Hello from Next.js! " + n


  // return NextResponse.json({ data })

  return new Response(data, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }})

}
