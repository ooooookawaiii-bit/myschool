import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

function formatDateTime(isoString: string): string {
  try {
    const d = new Date(isoString);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const hh = String(d.getHours()).padStart(2, "0");
    const min = String(d.getMinutes()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
  } catch {
    return isoString;
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("guestbook")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const entries = (data || []).map((row) => ({
      id: row.id,
      nickname: row.nickname,
      message: row.message,
      createdAt: formatDateTime(row.created_at),
    }));

    return NextResponse.json(entries);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "서버 오류";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nickname, message } = body;

    if (!nickname || typeof nickname !== "string" || !nickname.trim()) {
      return NextResponse.json(
        { error: "닉네임을 입력해 주세요." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "응원 글을 입력해 주세요." },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("guestbook")
      .insert([
        {
          nickname: nickname.trim(),
          message: message.trim(),
        },
      ])
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const newEntry = {
      id: data.id,
      nickname: data.nickname,
      message: data.message,
      createdAt: formatDateTime(data.created_at),
    };

    return NextResponse.json(newEntry, { status: 201 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "서버 오류";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
