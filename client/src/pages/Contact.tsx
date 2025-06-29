import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#FFFDFD] overflow-x-hidden min-h-screen pt-24">
      {/* Contact Hero Section */}
      <section className="py-20 bg-[#fceeee]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2A2A2A] mb-6 leading-tight">
              Contact Info
            </h2>
            <p className="text-lg text-[#2A2A2A] font-light mb-12">
              Feel free to reach out to us for inquiries, support, or collaboration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-[#2A2A2A] text-base font-light max-w-xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <Phone className="text-[#BA0000]" size={24} />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p>+91 90969 16310 / +91 90497 54164</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-[#BA0000]" size={24} />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p>aryas.rahul@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-[#BA0000]" size={24} />
              <div>
                <h4 className="text-lg font-semibold">Address</h4>
                <p>
                  S-9, 2nd Floor, Above Post Office, Vali Manzil,<br />
                  Kamptee Road, Gaddigodam Square,<br />
                  Nagpur - 440001
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
