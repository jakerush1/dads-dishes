import Link from "next/link";
import { Search } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
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
          <div className="flex items-center gap-3 sm:gap-6">
            <Link
              href="/getting-started"
              className="hidden text-xs hover:text-primary sm:inline sm:text-sm"
            >
              Start Here
            </Link>
            <Link
              href="/about"
              className="text-xs hover:text-primary sm:text-sm"
            >
              About
            </Link>
            <Link
              href="/recipes"
              className="text-xs hover:text-primary sm:text-sm"
            >
              <Search className="h-4 w-4" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
