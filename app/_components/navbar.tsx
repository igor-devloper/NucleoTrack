"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center justify-between border-b border-solid px-4 py-3 md:px-8 md:py-4">
      {/* ESQUERDA */}
      <div className="flex items-center gap-4 md:gap-10 justify-center">
        <Image src="/logo.png" width={110} height={10} alt="Finance AI" />
        <div className="hidden gap-6 md:flex">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
