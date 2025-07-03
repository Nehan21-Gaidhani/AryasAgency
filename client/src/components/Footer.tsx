import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#BA0000] text-[#FFFFFF] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Aryas Agency</h3>
            <p className="text-[#FFFFFF] opacity-80 font-light mb-6 leading-relaxed">
              Your trusted partner in debt recovery across India. With 15 years of experience and ethical practices, we deliver results that rebuild financial trust.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#FFFFFF] hover:text-[#FFDDDD] transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#FFFFFF] hover:text-[#FFDDDD] transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#FFFFFF] hover:text-[#FFDDDD] transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="mailto:aryas.rahul@gmail.com" className="text-[#FFFFFF] hover:text-[#FFDDDD] transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#FFFFFF] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-[#FFFFFF] opacity-80 hover:text-[#F5C6C6] transition-colors duration-200">Home</a></li>
              <li><a href="/services" className="text-[#FFFFFF] opacity-80 hover:text-[#F5C6C6] transition-colors duration-200">Services</a></li>
              <li><a href="/about" className="text-[#FFFFFF] opacity-80 hover:text-[#F5C6C6] transition-colors duration-200">About Us</a></li>
              <li><a href="#contact" className="text-[#FFFFFF] opacity-80 hover:text-[#F5C6C6] transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-[#FFFFFF] mb-4">Contact Info</h4>
            <div className="space-y-3 text-[#FFFFFF] opacity-80 text-sm leading-relaxed">
              <div className="flex items-center">
                <Phone className="text-[#FFFFFF] mr-3" size={16} />
                <span>+91 90969 16310 / +91 90497 54164</span>
              </div>

              <div className="flex items-center">
                <Mail className="text-[#FFFFFF] mr-3" size={16} />
                <span>aryas.rahul@gmail.com</span>
              </div>

              <div className="flex items-start">
                <MapPin className="text-[#FFFFFF] mr-3 mt-1" size={16} />
                <span>
                  Zero Mile Associate Fourth Floor,<br />
                  House No.268/K, Plot No.2, Shreya Infra Tower,<br />
                  Hanuman Gali, Sitabuldi, Nagpur,<br />
                  Maharashtra 440012
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Locations Block - full width, left aligned */}
        <div className="mt-12">
          <h4 className="text-lg font-semibold text-[#FFFFFF] mb-2">Locations across India</h4>
          <p className="flex flex-wrap gap-4 text-sm text-[#FFFFFF] opacity-80">
            <span>• Nagpur – Head Office</span>
            <span>• Pune</span>
            <span>• Nashik</span>
            <span>• Ahmedabad</span>
            <span>• Bangalore</span>
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#F5C6C6] mt-12 pt-8 text-center">
          <p className="text-[#FFE7E7] opacity-80 font-light text-sm">
            © 2024 Aryas Agency. All rights reserved. | Proprietor: Rahul Vaidya
          </p>
        </div>
      </div>
    </footer>
  );
}
