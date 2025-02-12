import { NextResponse } from 'next/server';

const REAL_API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export async function GET(request: Request) {
    try {
        const authHeader = request.headers.get("authorization");

        if (!authHeader) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const res = await fetch(`${REAL_API_URL}/api/user/self`, {
            method: "GET",
            headers: {
                "Authorization": authHeader,
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            return NextResponse.json({ error: "Failed to fetch user data" }, { status: res.status });
        }

        const data = await res.json();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}