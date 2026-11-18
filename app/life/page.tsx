import Link from "next/link";

interface Activity {
  emoji: string;
  name: string;
  description: string;
}

const activities: Activity[] = [
  {
    emoji: "🚶",
    name: "걷기 여행",
    description: "자연 속을 함께 걸으며 삶의 힘을 기르는 여행",
  },
  {
    emoji: "💡",
    name: "몰입주간",
    description: "관심 있는 배움에 집중하여 스스로 답을 찾아가는 주간",
  },
  {
    emoji: "🪙",
    name: "학교화폐·기본소득·콩앗이",
    description: "대안적 경제와 삶의 방식을 체험하는 자치 활동",
  },
  {
    emoji: "🤝",
    name: "마을과 함께",
    description: "마을 안에서 이웃과 배움을 나누는 현장 중심 활동",
  },
  {
    emoji: "🕊️",
    name: "아침묵상",
    description: "하루의 시작을 기도로 열며 삶의 방향을 정돈하는 시간",
  },
];

export default function SchoolLifePage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Page Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-[#E6E1D8] pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3EA] text-[#2E5A27] text-xs font-semibold">
          <span>🌱</span>
          <span>배움의 현장</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1C2A1A]">
          학교생활
        </h1>
        <p className="text-base sm:text-lg text-[#5A6658]">
          샬롬자유학교의 자연과 실천 중심 5대 배움 활동을 소개합니다.
        </p>
      </div>

      {/* 5개 활동 카드 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E6E1D8] shadow-xs hover:border-[#2E5A27]/50 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F5F1E8] flex items-center justify-center text-3xl border border-[#EAE4D7]">
                {activity.emoji}
              </div>
              <div className="space-y-1.5">
                <h2 className="text-xl font-bold text-[#1C2A1A]">
                  {activity.name}
                </h2>
                <p className="text-sm sm:text-base text-[#5A6658] leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 하단 네비게이션 카드 */}
      <div className="bg-[#F5F1E8] rounded-2xl p-6 border border-[#E6E1D8] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-[#1C2A1A]">
            샬롬자유학교의 일상을 응원해 주세요
          </h3>
          <p className="text-sm text-[#5A6658]">
            방명록에서 따뜻한 메시지를 남겨보세요.
          </p>
        </div>
        <Link
          href="/guestbook"
          className="px-5 py-2.5 rounded-xl bg-[#2E5A27] text-white text-sm font-medium hover:bg-[#24481F] transition-all shrink-0"
        >
          방명록 가기
        </Link>
      </div>
    </div>
  );
}
