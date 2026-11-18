import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-4 sm:pt-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3EA] text-[#2E5A27] text-xs sm:text-sm font-semibold tracking-wide border border-[#CDE1CA]">
          <span>🌿</span>
          <span>이왕이면 샬자~</span>
        </div>

        <div className="space-y-3">
          <div className="flex justify-center mb-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-[#D5CEBF] bg-white shadow-sm p-1">
              <Image
                src="/logo.jpg"
                alt="샬롬자유학교"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1C2A1A] tracking-tight">
            샬롬자유학교
          </h1>
          <p className="text-lg sm:text-xl font-medium text-[#2E5A27] max-w-2xl mx-auto leading-relaxed">
            하나님의 형상을 회복하고 삶의 힘을 기르는 교육
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/life"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2E5A27] text-white font-medium hover:bg-[#24481F] transition-all shadow-sm hover:shadow"
          >
            <span>학교생활 둘러보기</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* 3대 핵심 가치 Section */}
      <section className="space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-[#1C2A1A]">핵심 가치</h2>
          <p className="text-sm text-[#5A6658]">
            샬롬자유학교가 추구하는 세 가지 배움의 길
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 가치 1: 자유의 맛 */}
          <div className="bg-white rounded-2xl p-6 border border-[#E6E1D8] shadow-xs hover:border-[#2E5A27]/40 transition-all space-y-3">
            <div className="text-3xl">🍃</div>
            <h3 className="text-xl font-bold text-[#1C2A1A]">자유의 맛</h3>
            <p className="text-sm text-[#5A6658] leading-relaxed">
              선택하고 책임지는 연습
            </p>
          </div>

          {/* 가치 2: 사랑의 멋 */}
          <div className="bg-white rounded-2xl p-6 border border-[#E6E1D8] shadow-xs hover:border-[#2E5A27]/40 transition-all space-y-3">
            <div className="text-3xl">❤️</div>
            <h3 className="text-xl font-bold text-[#1C2A1A]">사랑의 멋</h3>
            <p className="text-sm text-[#5A6658] leading-relaxed">
              하나님, 나와 이웃, 자연 사랑
            </p>
          </div>

          {/* 가치 3: 대안의 삶 */}
          <div className="bg-white rounded-2xl p-6 border border-[#E6E1D8] shadow-xs hover:border-[#2E5A27]/40 transition-all space-y-3">
            <div className="text-3xl">🌱</div>
            <h3 className="text-xl font-bold text-[#1C2A1A]">대안의 삶</h3>
            <p className="text-sm text-[#5A6658] leading-relaxed">
              앎과 삶의 일치
            </p>
          </div>
        </div>
      </section>

      {/* 1년 흐름 Section */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E6E1D8] shadow-xs space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-[#1C2A1A]">1년 흐름</h2>
          <p className="text-sm text-[#5A6658]">
            단계별로 이어지는 샬롬자유학교의 학기 과정
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 relative">
          {/* 1학기 */}
          <div className="bg-[#FBF9F4] rounded-xl p-5 border border-[#EAE4D7] text-center space-y-2">
            <div className="inline-block px-2.5 py-1 rounded-md bg-[#EBF3EA] text-[#2E5A27] text-xs font-bold">
              1학기
            </div>
            <h3 className="text-lg font-bold text-[#1C2A1A]">기초</h3>
            <p className="text-xs text-[#5A6658]">
              배움의 토대를 다지는 학기
            </p>
          </div>

          {/* 2학기 */}
          <div className="bg-[#FBF9F4] rounded-xl p-5 border border-[#EAE4D7] text-center space-y-2">
            <div className="inline-block px-2.5 py-1 rounded-md bg-[#EBF3EA] text-[#2E5A27] text-xs font-bold">
              2학기
            </div>
            <h3 className="text-lg font-bold text-[#1C2A1A]">방향</h3>
            <p className="text-xs text-[#5A6658]">
              스스로의 길과 방향을 찾는 학기
            </p>
          </div>

          {/* 3학기 */}
          <div className="bg-[#FBF9F4] rounded-xl p-5 border border-[#EAE4D7] text-center space-y-2">
            <div className="inline-block px-2.5 py-1 rounded-md bg-[#EBF3EA] text-[#2E5A27] text-xs font-bold">
              3학기
            </div>
            <h3 className="text-lg font-bold text-[#1C2A1A]">대안</h3>
            <p className="text-xs text-[#5A6658]">
              대안적 삶을 실천해보는 학기
            </p>
          </div>
        </div>
      </section>

      {/* 방명록 안내 배너 */}
      <section className="bg-[#EBF3EA] rounded-2xl p-6 sm:p-8 border border-[#CDE1CA] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-bold text-[#2E5A27]">
            응원의 한마디를 남겨주세요 💌
          </h3>
          <p className="text-sm text-[#4A5568]">
            샬롬자유학교를 향한 응원과 축복을 방명록에 남길 수 있습니다.
          </p>
        </div>
        <Link
          href="/guestbook"
          className="shrink-0 px-5 py-2.5 rounded-xl bg-[#2E5A27] text-white text-sm font-medium hover:bg-[#24481F] transition-all shadow-xs"
        >
          방명록 바로가기
        </Link>
      </section>
    </div>
  );
}
