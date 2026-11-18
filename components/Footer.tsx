export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#E6E1D8] bg-[#F5F1E8] py-8 text-center text-xs sm:text-sm text-[#5A6658]">
      <div className="max-w-5xl mx-auto px-4">
        <p className="leading-relaxed">
          학생 실습으로 만든 사이트예요 (공식 홈페이지 아님) · 공식 홈페이지:{" "}
          <a
            href="https://www.shalomfree.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#2E5A27] underline underline-offset-2 hover:text-[#1C2A1A] transition-colors"
          >
            shalomfree.kr
          </a>
        </p>
      </div>
    </footer>
  );
}
