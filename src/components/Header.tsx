"use client";

import React, { useState, useEffect } from "react";
import { menuItems } from "@/data/landingData";
import { Menu, X, Cpu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 shadow-md shadow-blue-500/10">
              <Cpu className="w-5 h-5 text-white animate-pulse" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 blur-sm opacity-20 -z-10"></div>
            </div>
            <a href="#" className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5">
              Nextgen<span className="text-blue-600">AI</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#lien-he"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all shadow-sm shadow-blue-500/10 cursor-pointer"
            >
              Đặt lịch tư vấn
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors border border-slate-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out border-b border-slate-200 bg-white/95 backdrop-blur-lg ${
          isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 space-y-3">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-bold text-slate-700 hover:text-blue-600 hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 px-4">
            <a
              href="#lien-he"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center px-5 py-3 text-base font-bold text-white rounded-xl bg-blue-600 shadow-md shadow-blue-500/10 cursor-pointer"
            >
              Đặt lịch tư vấn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
