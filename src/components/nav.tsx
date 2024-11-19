"use client";
import Link from "next/link";
import { Search } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-accent">
      <div className="mx-auto max-w-4xl px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div>
              <div className="font-domine text-xl font-extrabold text-red-600">
                DAD&apos;S DISHES
              </div>
              <div className="text-xs text-muted-foreground sm:inline sm:text-sm">
                and random thoughts...
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-1 sm:gap-4">
            <Link
              href="/getting-started"
              className={`group relative rounded-md px-2 py-1 text-xs transition-all duration-300 sm:inline sm:text-sm ${
                pathname === "/getting-started"
                  ? "font-semibold text-red-600"
                  : ""
              }`}
            >
              <span>Start Here</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/about"
              className={`group relative rounded-md px-2 py-1 text-xs transition-all duration-300 sm:inline sm:text-sm ${
                pathname === "/about" ? "font-semibold text-red-600" : ""
              }`}
            >
              <span>About</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/recipes"
              className={`group relative rounded-md p-2 text-xs transition-all duration-300 sm:inline sm:text-sm ${
                pathname === "/recipes" ? "font-semibold text-red-600" : ""
              }`}
            >
              <Search className="h-4 w-4" />
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
