"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, Briefcase } from 'lucide-react'; // Removed X as it's part of SheetClose
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'; // Added SheetClose
import { navItems, resumeData } from '@/lib/resume-data';
import { ThemeSwitcher } from './ThemeSwitcher';
// import { cn } from '@/lib/utils'; // cn is not used in this file

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">{resumeData.name.split(' ')[0]}'s Portfolio</span>
        </Link>

        {/* Right side items wrapper */}
        <div className="flex items-center gap-2 md:gap-4">
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ThemeSwitcher />

          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-6"> {/* Added p-6 here */}
                <div className="flex flex-col space-y-1"> {/* Reduced space-y */}
                  <SheetClose asChild>
                    <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setMobileMenuOpen(false)}>
                      <Briefcase className="h-6 w-6 text-primary" />
                      <span className="font-bold text-lg">{resumeData.name.split(' ')[0]}'s Portfolio</span>
                    </Link>
                  </SheetClose>
                  {navItems.map((item) => (
                     <SheetClose asChild key={item.label}>
                        <Link
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-lg font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                     </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
