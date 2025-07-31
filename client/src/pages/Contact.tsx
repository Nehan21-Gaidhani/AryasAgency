import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#FFFDFD] overflow-x-hidden min-h-screen pt-14">
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2A2A2A] mb-4">
              Contact Info
            </h2>
            <p className="text-lg text-[#2A2A2A] font-light">
              Feel free to reach out to us for inquiries, support, or collaboration.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Get in Touch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 text-[#2A2A2A] text-base font-light"
            >
              <h3 className="text-2xl font-semibold text-[#2A2A2A] mb-4">Get in Touch</h3>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone size={24} color="#ff7000" />
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <p>+91 90969 16310 / +91 90497 54164</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail size={24} color="#ff7000" />
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p>hr@aryasagency.in</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin size={24} color="#ff7000" />
                <div>
                  <h4 className="text-lg font-semibold">Address</h4>
                  <p>
                    Zero Mile Associate Fourth Floor,<br />
                    House No.268/K, Plot No.2, Shreya Infra Tower,<br />
                    Hanuman Gali, Sitabuldi, Nagpur,<br />
                    Maharashtra 440012
                  </p>
                </div>
              </div>

              {/* Locations */}
              <div className="flex items-start gap-4">
                <Globe size={24} color="#ff7000" />
                <div>
                  <h4 className="text-lg font-semibold">Locations across India</h4>
                  <p className="flex flex-wrap gap-4 text-sm mt-1">
                    <span>• Nagpur – Head Office</span>
                    <span>• Pune</span>
                    <span>• Nashik</span>
                    <span>• Ahmedabad</span>
                    <span>• Bangalore</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Us Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[#ffffff] p-6 rounded-2xl shadow-[0_3px_6px_1px_rgba(0,0,0,0.1)]"
            >
              <h3 className="text-2xl font-semibold text-[#2A2A2A] mb-6">Contact Us</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7000]"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7000]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contact</label>
                  <input
                    type="tel"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7000]"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Area of Interest</label>
                  <select
                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7000]"
                  >
                    <option>Select an option</option>
                    <option>Corporate Loan Recovery</option>
                    <option>Personal Loan Recovery</option>
                    <option>Cheque Bounce Follow-Up</option>
                    <option>Legal Action Support</option>
                    <option>Bank/NBFC Collection Support</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 bg-[#ff7000] hover:bg-[#e65f00] text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
