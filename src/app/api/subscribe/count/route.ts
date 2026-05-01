import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.BREVO_API_KEY;
    const importListId = parseInt(
      process.env.BREVO_LIST_EMAIL_IMPORT_ID || "3",
      10,
    );

    if (!apiKey) {
      return NextResponse.json({ count: 0 }, { status: 500 });
    }

    const listRes = await fetch(
      `https://api.brevo.com/v3/contacts/lists/${importListId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "api-key": apiKey,
        },
      },
    );

    if (listRes.ok) {
      const listData = await listRes.json();
      const uniqueSubscribers = listData.uniqueSubscribers || 0;
      return NextResponse.json({ count: uniqueSubscribers });
    }

    return NextResponse.json({ count: 0 });
  } catch (error) {
    console.error("Error fetching subscriber count:", error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
