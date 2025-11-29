


export async function GET(){
    return Response.json({
        message: "Hello from backend!",
    });
}

export async function POST(req:Request){
    const body=await req.json();

    return Response.json({
        message: "post recieved",
        data: body,
    })
}