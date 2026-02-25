import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  phone?: string;
  message?: string;
};

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as LeadPayload;
    const name = normalize(body.name);
    const phone = normalize(body.phone);
    const message = normalize(body.message);

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    const accountSid = process.env.TEXTGRID_ACCOUNT_SID;
    const authToken = process.env.TEXTGRID_AUTH_TOKEN;
    const fromNumber = process.env.TEXTGRID_PHONE_NUMBER;
    const toNumber = process.env.TEXTGRID_NOTIFY_NUMBER;
    const apiBase = process.env.TEXTGRID_API_BASE_URL || "https://api.textgrid.com/2010-04-01";

    if (!accountSid || !authToken || !fromNumber || !toNumber) {
      return NextResponse.json(
        { error: "Chat is not configured yet. Missing server environment values." },
        { status: 500 },
      );
    }

    const smsBody = [
      "New website lead",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Message: ${message || "N/A"}`,
    ].join("\n");

    const normalizedBase = apiBase.replace(/\/$/, "");
    const versionedBase = normalizedBase.endsWith("/2010-04-01")
      ? normalizedBase
      : `${normalizedBase}/2010-04-01`;
    const endpoint = `${versionedBase}/Accounts/${encodeURIComponent(accountSid)}/Messages.json`;

    const authHeader = `Bearer ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`;
    const providerRes = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: smsBody,
        from: fromNumber,
        to: toNumber,
      }),
      cache: "no-store",
    });

    if (!providerRes.ok) {
      const details = await providerRes.text();
      return NextResponse.json(
        { error: "Message provider rejected the request.", details: details.slice(0, 300) },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }
}
