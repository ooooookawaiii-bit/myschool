"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "홈", href: "/" },
    { name: "학교생활", href: "/life" },
    { name: "방명록", href: "/guestbook" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F4]/90 backdrop-blur-md border-b border-[#E6E1D8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo and School Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-[#D5CEBF] bg-white flex items-center justify-center shadow-xs">
            <Image
              src="/logo.jpg"
              alt="샬롬자유학교 로고"
              fill
              className="object-contain p-0.5"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-[#1C2A1A] tracking-tight group-hover:text-[#2E5A27] transition-colors">
              샬롬자유학교
            </span>
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#2E5A27] text-white shadow-xs"
                    : "text-[#4A5568] hover:text-[#1C2A1A] hover:bg-[#EAE4D7]/60"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
