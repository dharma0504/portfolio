"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Heart, Mail, Menu, Star, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolioData";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[var(--ca-ink)] bg-[var(--ca-surface)]/90 backdrop-blur-md">
      <div className="flex items-stretch justify-between px-2 xs:px-3 sm:px-6 max-w-7xl mx-auto">
        {/* Left Tabs (Inspired by Creative Artsy Navigation) */}
        <nav className="flex items-stretch divide-x-2 divide-[var(--ca-ink)] border-x-2 border-[var(--ca-ink)]">
          <Link
            href="/"
            className="flex items-center gap-1.5 px-2.5 xs:px-3 sm:px-5 py-2.5 sm:py-3 font-ca-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--ca-ink)] bg-[var(--ca-yellow)] hover:brightness-105 transition-all"
          >
            <Star className="w-3.5 h-3.5 fill-[var(--ca-ink)] shrink-0" />
            <span>HOME</span>
          </Link>

          <Link
            href="/#work"
            className="hidden sm:flex items-center px-4 py-3 font-ca-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--ca-ink)] hover:bg-[var(--ca-chrome)] transition-colors"
          >
            WORK
          </Link>

          <Link
            href="/#experience"
            className="hidden md:flex items-center px-4 py-3 font-ca-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--ca-ink)] hover:bg-[var(--ca-chrome)] transition-colors"
          >
            EXPERIENCE
          </Link>

          <Link
            href="/#skills"
            className="hidden lg:flex items-center px-4 py-3 font-ca-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--ca-ink)] hover:bg-[var(--ca-chrome)] transition-colors"
          >
            TOOLKIT
          </Link>

          <Link
            href="/#about"
            className="hidden sm:flex items-center px-4 py-3 font-ca-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--ca-ink)] hover:bg-[var(--ca-chrome)] transition-colors"
          >
            ABOUT
          </Link>
        </nav>

        {/* Right Actions: Social circles + Contact Button */}
        <div className="flex items-center space-x-1.5 xs:space-x-2 sm:space-x-3 py-1.5 sm:py-2">
          {/* Social Circles */}
          <a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] flex items-center justify-center text-[var(--ca-ink)] hover:bg-[var(--ca-yellow)] transition-transform hover:-translate-y-0.5 shrink-0"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={personalInfo.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] flex items-center justify-center text-[var(--ca-ink)] hover:bg-[var(--ca-cyan)] transition-transform hover:-translate-y-0.5 shrink-0"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={`mailto:${personalInfo.contact.emailMailto}`}
            aria-label="Send Email"
            className="hidden md:flex w-8 h-8 rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] items-center justify-center text-[var(--ca-ink)] hover:bg-[var(--ca-pink-soft)] transition-transform hover:-translate-y-0.5 shrink-0"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>

          {/* Theme Toggle (Light / Dark mode) */}
          <ThemeToggle />

          {/* Resume Download Pill */}
          <a
            href={personalInfo.contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-mint)] font-ca-mono text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)] pop-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
          >
            <span>RESUME</span>
            <Download className="w-3 h-3" />
          </a>

          {/* Contact Pill */}
          <Link
            href="/#contact"
            className="inline-flex items-center space-x-1 xs:space-x-1.5 px-2.5 xs:px-3 sm:px-4 py-1.5 rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-ink)] text-white font-ca-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider pop-shadow-sm hover:bg-[var(--ca-blue)] transition-all shrink-0"
          >
            <Heart className="w-3 h-3 fill-current text-[var(--ca-pink)] shrink-0" />
            <span>CONTACT</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-1.5 rounded border-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] flex items-center justify-center shrink-0"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-[var(--ca-ink)]" /> : <Menu className="w-4 h-4 text-[var(--ca-ink)]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] px-4 py-4 space-y-3 font-ca-mono text-xs shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--ca-ink)]/15">
            <span className="text-[10px] font-bold text-[var(--ca-gray)] uppercase tracking-wider">
              NAVIGATION MENU
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--ca-yellow)] text-[var(--ca-ink)] font-bold">
              PORTFOLIO // 2026
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/#work"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded border border-[var(--ca-ink)] bg-white font-bold text-[var(--ca-ink)] flex items-center space-x-2 hover:bg-[var(--ca-chrome)] transition-colors"
            >
              <span className="text-[var(--ca-blue)]">✦</span>
              <span>WORK</span>
            </Link>
            <Link
              href="/#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded border border-[var(--ca-ink)] bg-white font-bold text-[var(--ca-ink)] flex items-center space-x-2 hover:bg-[var(--ca-chrome)] transition-colors"
            >
              <span className="text-[var(--ca-green)]">✦</span>
              <span>EXPERIENCE</span>
            </Link>
            <Link
              href="/#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded border border-[var(--ca-ink)] bg-white font-bold text-[var(--ca-ink)] flex items-center space-x-2 hover:bg-[var(--ca-chrome)] transition-colors"
            >
              <span className="text-[var(--ca-orange)]">✦</span>
              <span>TOOLKIT</span>
            </Link>
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded border border-[var(--ca-ink)] bg-white font-bold text-[var(--ca-ink)] flex items-center space-x-2 hover:bg-[var(--ca-chrome)] transition-colors"
            >
              <span className="text-[var(--ca-pink)]">✦</span>
              <span>ABOUT</span>
            </Link>
          </div>

          {/* Theme & Resume PDF Download Link for Mobile */}
          <div className="pt-2 border-t border-[var(--ca-ink)]/20 flex flex-col gap-2.5">
            <div className="flex items-center justify-between px-1">
              <span className="font-ca-mono text-xs font-bold text-[var(--ca-ink)] uppercase">APPEARANCE</span>
              <ThemeToggle showLabel className="px-3 py-1.5 rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] flex items-center justify-center text-[var(--ca-ink)] text-xs shadow-xs" />
            </div>
            <a
              href={personalInfo.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-3 rounded border-2 border-[var(--ca-ink)] bg-[var(--ca-mint)] font-bold text-center text-[var(--ca-ink)] flex items-center justify-center space-x-2 pop-shadow-sm active:translate-x-0.5 active:translate-y-0.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD RESUME PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
