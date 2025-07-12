"use client";

import Link from "next/link";
// import { UserNav } from "./user-nav";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./modetoggle";

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { link: "/profile", name: "Profile" },
    { link: "/browse", name: "Browse" },
    { link: "/swap-request", name: "Swap Request" },
    { link: "/dashboard", name: "Admin" },
  ];

  if (pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up")) {
    return null; // 👈 don't render anything on sign-in or sign-up
  }

  return (
    <div className="sticky z-50 top-0 px-4 w-full">
      <header className="border-b backdrop-blur-sm ">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link
              className="text-xl font-bold italic tracking-widest px-2 text-amber-700 dark:text-amber-200"
              href="/">
              SkillSwap
            </Link>
            {/* <span className="ml-2 text-muted-foreground text-xs hidden sm:inline">
              for Professionals
            </span> */}
          </div>

          <div className="flex  items-center gap-2">
            <Button
              variant={"outline"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle Menu">
              <Menu className="w-5 h-5" />
            </Button>
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.link}
                  className="text-sm font-medium hover:text-amber-400 transition">
                  {link.name}
                </Link>
              ))}
              <ModeToggle />
              {/* <SignedOut> */}
              <Button asChild variant="outline">
                <Link href="/sign-in">Login</Link>
              </Button>
              {/* </SignedOut> */}

              {/* <SignedIn> */}
              {/* <UserNav /> */}
              {/* </SignedIn> */}
            </div>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <div className="flex flex-col items-center mb-4 gap-3 mt-2 md:hidden ml-4">
            {/* <SignedIn> */}

            {/* <UserNav /> */}
            {/* </SignedIn> */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className="text-sm font-medium hover:text-rose-500 transition px-2">
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}
