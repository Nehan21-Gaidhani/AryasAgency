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
    <nav className="fixed top z-50 w-full">
      <div className="bg-white shadow-lg">
        <div className="flex justify-between items-center px-6 py-2.5">
          <Link href="/" className="flex justify-between items-center">
              <img
                src="./assets/logo.png"
                alt="Logo"
                className="mr-3 w-8 h-8"
              />
              <h2 className="text-xl font-bold text-[#3d3d3d] cursor-pointer">
                Aryas Agency
              </h2>
            </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`px-3 py-2 font-medium transition-colors duration-200 cursor-pointer rounded-lg ${
                      isActive(item.path)
                        ? "text-[#000000] bg-[#Ffe9d9]"
                        : "text-[#2A2A2A] hover:text-[#000000] hover:bg-[#Ffe9d9]"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Contact Button (now acts as a link) */}
            <Link href="/contact">
              <Button className="bg-[#ff7000] text-[#ffffff] px-6 border-2 border-[#ff7000] py-2 rounded-lg hover:bg-[#ffffff] hover:text-[#ff7000] hover:border-[#ff7000] transition-colors duration-200">
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
              className="text-[#ffffff] bg-[#ff7000]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={36} />}
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
                        ? "text-[#2a2a2a] bg-[#ffe9d9]"
                        : "text-[#2A2A2A] hover:text-[#2a2a2a] hover:bg-[#Ffe9d9]"
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
                    className="w-full bg-[#ff7000] text-[#ffffff] hover:bg-[#ff5000] hover:text-[#ffffff]"
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
