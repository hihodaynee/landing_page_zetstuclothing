import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email không hợp lệ" },
        { status: 400 },
      );
    }

    // Kiểm tra định dạng email và domain cơ bản để tránh spam
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email không đúng định dạng" },
        { status: 400 },
      );
    }

    // Chặn các domain rác phổ biến (temporary email/disposable)
    const disposableDomains = [
      "temp-mail.org",
      "guerrillamail.com",
      "10minutemail.com",
      "mailinator.com",
    ];
    const domain = email.split("@")[1];
    if (disposableDomains.includes(domain)) {
      return NextResponse.json(
        { error: "Vui lòng sử dụng email chính chủ" },
        { status: 400 },
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const importListId = parseInt(
      process.env.BREVO_LIST_EMAIL_IMPORT_ID || "3",
      10,
    );
    const confirmListId = parseInt(
      process.env.BREVO_LIST_EMAIL_COMFIRM_ID || "2",
      10,
    );

    if (!apiKey) {
      console.error("BREVO_API_KEY is missing in environmental variables");
      return NextResponse.json(
        { error: "Cấu hình API chưa hoàn thiện" },
        { status: 500 },
      );
    }

    // --- KIỂM TRA GIỚI HẠN 100 NGƯỜI TỪ DANH SÁCH CONFIRM ---
    const listRes = await fetch(
      `https://api.brevo.com/v3/contacts/lists/${confirmListId}`,
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
      if (uniqueSubscribers >= 100) {
        return NextResponse.json(
          { error: "Chiến dịch đã đủ số lượng người đăng ký (100/100)." },
          { status: 403 },
        );
      }
    }
    // ------------------------------------

    // 1. Kiểm tra thông tin contact trong DANH SÁCH IMPORT
    const checkRes = await fetch(
      `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "api-key": apiKey,
        },
      },
    );

    if (checkRes.ok) {
      const contactData = await checkRes.json();
      // Kiểm tra xem email đó đã thuộc importListId chưa.
      if (contactData.listIds && contactData.listIds.includes(importListId)) {
        return NextResponse.json(
          { error: "Email này đã đăng ký rồi." },
          { status: 409 },
        );
      }
    } else if (checkRes.status === 404) {
      // Email chưa tồn tại trong danh bạ, đây là trạng thái bình thường để tiếp tục tạo mới
      console.log("Contact not found, proceeding to create...");
    } else {
      // Một số lỗi khác từ Brevo API khi check (ví dụ 401, 403)
      const errorData = await checkRes.json();
      console.error("Brevo Check Error:", errorData);
    }

    // 2. Tạo hoặc cập nhật contact vào list import
    const createRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email: email,
        listIds: [importListId],
        updateEnabled: true,
      }),
    });

    if (createRes.status === 201 || createRes.status === 204) {
      return NextResponse.json(
        { message: "Đăng ký thành công!" },
        { status: 200 },
      );
    }

    const result = await createRes.json();

    if (createRes.ok) {
      return NextResponse.json(
        { message: "Đăng ký thành công!" },
        { status: 200 },
      );
    } else {
      console.error("Brevo API Error:", result);
      if (
        result.code === "duplicate_parameter" ||
        result.message?.includes("already exists")
      ) {
        return NextResponse.json(
          { error: "Email này đã đăng ký rồi." },
          { status: 409 },
        );
      }
      return NextResponse.json(
        { error: "Có lỗi xảy ra khi đăng ký." },
        { status: 500 },
      );
    }
  } catch (error: any) {
    console.error("System Error:", error.message);
    return NextResponse.json({ error: "Lỗi kết nối server." }, { status: 500 });
  }
}
