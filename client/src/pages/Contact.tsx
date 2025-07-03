import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Map ,Globe } from "lucide-react"; // <-- Added `Map`

export default function Contact() {
  return (
    <div className="bg-[#FFFDFD] overflow-x-hidden min-h-screen pt-24">
      <section className="py-20 bg-[#fceeee]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Hero */}
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

          {/* Info Blocks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-[#2A2A2A] text-base font-light max-w-xl mx-auto"
          >
            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="text-[#BA0000]" size={24} />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p>+91 90969 16310 / +91 90497 54164</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="text-[#BA0000]" size={24} />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p>aryas.rahul@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="text-[#BA0000]" size={24} />
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

            {/* Locations across India */}
            <div className="flex items-start gap-4">
              <Globe className="text-[#BA0000]" size={24} />
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
        </div>
      </section>
    </div>
  );
}
