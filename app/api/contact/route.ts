import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const requiredFields = ["name", "email", "propertyType", "message"] as const;
  const missing = requiredFields.filter((field) => !String(body?.[field] ?? "").trim());

  if (missing.length > 0) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please complete all required fields before submitting.",
      },
      { status: 400 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks, your enquiry has been received. Our team will be in touch shortly.",
  });
}
