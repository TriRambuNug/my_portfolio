"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu as MenuIcon, X } from "lucide-react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll ke bawah dan melebihi 100px
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scroll ke atas
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Reset timeout saat pengguna menggulir
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Set timeout untuk menampilkan header setelah berhenti menggulir
      setScrollTimeout(
        setTimeout(() => {
          setIsHeaderVisible(true);
        }, 500) // Delay 500ms setelah berhenti menggulir
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [lastScrollY, scrollTimeout]);

  if (!mounted) return null; // Hindari error saat rendering di server

  return (
    <header
      className={`bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full p-4 z-50 transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* 🔥 Tambahkan kontras pada teks header */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Rambu
        </h1>

        {/* Navbar */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
          >
            Contact
          </a>
        </nav>

        {/* Tombol Mode Gelap */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-4 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {theme === "dark" ? (
            <Sun className="text-yellow-400" />
          ) : (
            <Moon className="text-gray-800" />
          )}
        </button>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-gray-800 dark:text-white" />
          ) : (
            <MenuIcon className="w-6 h-6 text-gray-800 dark:text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 p-4 shadow-md md:hidden">
          <a
            href="#home"
            className="block py-2 text-gray-800 dark:text-gray-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 text-gray-800 dark:text-gray-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-2 text-gray-800 dark:text-gray-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 text-gray-800 dark:text-gray-300"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}