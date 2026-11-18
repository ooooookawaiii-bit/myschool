"use client";

import { useEffect, useState } from "react";

interface GuestbookEntry {
  id: string;
  nickname: string;
  message: string;
  createdAt: string;
}

export default function GuestbookPage() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch entries from server memory API
  const fetchEntries = async () => {
    try {
      const res = await fetch("/api/guestbook", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setEntries(data);
      }
    } catch {
      setError("방명록을 불러오는 중 문제가 발생했습니다.");
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim() || !message.trim()) {
      setError("닉네임과 응원 글을 모두 입력해 주세요.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname, message }),
      });

      if (res.ok) {
        const newEntry = await res.json();
        setEntries((prev) => [newEntry, ...prev]);
        setMessage("");
      } else {
        const errData = await res.json();
        setError(errData.error || "등록에 실패했습니다.");
      }
    } catch {
      setError("서버와의 통신에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Page Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-[#E6E1D8] pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3EA] text-[#2E5A27] text-xs font-semibold">
          <span>💌</span>
          <span>응원과 축복</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1C2A1A]">
          방명록
        </h1>
        <p className="text-base sm:text-lg text-[#5A6658]">
          샬롬자유학교를 향한 응원 한마디를 남겨주세요. 모든 방문자가 함께 볼 수 있습니다.
        </p>
      </div>

      {/* 작성 폼 (Form) */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E6E1D8] shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-[#1C2A1A] flex items-center gap-2">
          <span>✏️</span>
          <span>응원 글 남기기</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="nickname"
              className="block text-xs font-semibold text-[#5A6658] mb-1.5"
            >
              닉네임
            </label>
            <input
              id="nickname"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="예: 따뜻한이웃"
              maxLength={20}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D5CEBF] bg-[#FBF9F4] text-[#1C2A1A] text-sm focus:outline-none focus:border-[#2E5A27] focus:ring-1 focus:ring-[#2E5A27] transition-all"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold text-[#5A6658] mb-1.5"
            >
              응원 글
            </label>
            <textarea
              id="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="샬롬자유학교 학생들과 공동체를 응원하는 한 줄을 남겨주세요."
              maxLength={200}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D5CEBF] bg-[#FBF9F4] text-[#1C2A1A] text-sm focus:outline-none focus:border-[#2E5A27] focus:ring-1 focus:ring-[#2E5A27] transition-all resize-none"
              required
            />
          </div>

          {error && (
            <p className="text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">
              {error}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
            <span className="text-xs text-[#5A6658]">
              * Supabase 데이터베이스에 안전하게 영구 저장되어 모든 방문자가 함께 볼 수 있습니다.
            </span>
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#2E5A27] text-white text-sm font-semibold hover:bg-[#24481F] disabled:opacity-50 transition-all shadow-xs"
            >
              {loading ? "등록 중..." : "응원 남기기"}
            </button>
          </div>
        </form>
      </section>

      {/* 응원 글 목록 (Entries List) */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[#1C2A1A] flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span>💬</span>
            <span>함께 나누는 응원 ({entries.length})</span>
          </span>
          <button
            onClick={fetchEntries}
            className="text-xs font-medium text-[#2E5A27] hover:underline"
          >
            새로고침
          </button>
        </h2>

        {fetching ? (
          <div className="text-center py-12 text-[#5A6658] text-sm">
            방명록을 불러오는 중입니다...
          </div>
        ) : entries.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#E6E1D8] text-[#5A6658] text-sm">
            아직 작성된 응원 글이 없습니다. 첫 번째 응원을 남겨보세요!
          </div>
        ) : (
          <div className="space-y-3">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-white rounded-xl p-5 border border-[#E6E1D8] shadow-xs space-y-2 hover:border-[#2E5A27]/30 transition-all"
              >
                <div className="flex items-center justify-between text-xs text-[#5A6658]">
                  <span className="font-bold text-sm text-[#1C2A1A] flex items-center gap-1.5">
                    <span>🌱</span>
                    <span>{entry.nickname}</span>
                  </span>
                  <span>{entry.createdAt}</span>
                </div>
                <p className="text-sm text-[#2D3748] leading-relaxed break-words">
                  {entry.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
