import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#BA0000] text-[#FFFFFF] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-[#Ffffff] mb-4">Aarya Agency</h3>
            <p className="text-[#FFffff] opacity-80 font-light mb-6 leading-relaxed">
              Your trusted partner in debt recovery across India. With 15 years of experience and ethical practices, we deliver results that rebuild financial trust.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#Ffffff] hover:text-[#FFffff] transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-[#Ffffff] hover:text-[#FFE7E7] transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-[#Ffffff] hover:text-[#FFE7E7] transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-[#Ffffff] hover:text-[#FFE7E7] transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[#Ffffff] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-[#Ffffff] opacity-80 hover:text-[#F5C6C6] transition-colors duration-200">Home</a></li>
              <li><a href="/services" className="text-[#Ffffff] opacity-80 hover:text-[#F5C6C6] transition-colors duration-200">Services</a></li>
              <li><a href="/about" className="text-[#Ffffff] opacity-80 hover:text-[#F5C6C6] transition-colors duration-200">About Us</a></li>
              <li><a href="#contact" className="text-[#Ffffff] opacity-80 hover:text-[#F5C6C6] transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[#Ffffff] mb-4">Contact Info</h4>
            <div className="space-y-3 text-[#Ffffff] opacity-80">
              <div className="flex items-center">
                <Phone className="text-[#Ffffff] mr-3" size={16} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-[#Ffffff] mr-3" size={16} />
                <span>info@aaryaagency.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-[#Ffffff] mr-3" size={16} />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#F5C6C6] mt-12 pt-8 text-center">
          <p className="text-[#FFE7E7] opacity-80 font-light">
            © 2024 Aarya Agency. All rights reserved. | Trusted Recovery Partner Since 2009
          </p>
        </div>
      </div>
    </footer>
  );
}
