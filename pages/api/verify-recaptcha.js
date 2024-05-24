// pages/api/verify-recaptcha.js
import { NextResponse } from "next/server";

export async function POST(request) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const postData = await request.json();
    const { gRecaptchaToken } = postData;

    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", gRecaptchaToken);

    let res;

    try {
        res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData,
        });

        res = await res.json();
    } catch (e) {
        return NextResponse.json({ success: false });
    }

    if (res?.success && res?.score > 0.5) {
        return NextResponse.json({
            success: true,
            score: res.score,
        });
    } else {
        return NextResponse.json({ success: false });
    }
}
