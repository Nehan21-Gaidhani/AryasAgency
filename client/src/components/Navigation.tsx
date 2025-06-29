import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    // Removed "Contact" here to avoid duplication
  ];

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="floating-navbar bg-white rounded-2xl">
        <div className="flex justify-between items-center px-6 py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h2 className="text-xl font-bold text-[#4B1A1A] cursor-pointer">
                Aryas Agency
              </h2>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`px-3 py-2 font-medium transition-colors duration-200 cursor-pointer rounded-lg ${
                      isActive(item.path)
                        ? "text-[#4B1A1A] bg-[#F5C6C6]/30"
                        : "text-[#2A2A2A] hover:text-[#4B1A1A] hover:bg-[#F5C6C6]/20"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Contact Button (now acts as a link) */}
            <Link href="/contact">
              <Button className="bg-[#BA0000] text-[#fceeee] px-6 border-2 border-[#BA0000] py-2 rounded-lg hover:bg-[#FFE7E7] hover:text-[#BA0000] hover:border-[#BA0000] transition-colors duration-200">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#2A2A2A] hover:text-[#4B1A1A]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20">
            <div className="px-6 py-3 space-y-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 cursor-pointer rounded-lg ${
                      isActive(item.path)
                        ? "text-[#4B1A1A] bg-[#F5C6C6]/30"
                        : "text-[#2A2A2A] hover:text-[#4B1A1A] hover:bg-[#F5C6C6]/20"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}

              {/* Mobile Contact Button */}
              <div className="pt-2">
                <Link href="/contact">
                  <Button
                    className="w-full bg-[#4b1a1a] text-[#fceeee] hover:bg-[#FFE7E7] hover:text-[#BA0000]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
