import { motion } from "framer-motion";
import { ArrowRight, Scale, Phone, Users, Monitor, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";
import Group_9 from "@assets/Group 9.png";

export default function Home() {
  const recoveryMethods = [
    {
      title: "Legal Recovery Support",
      description: "Professional legal assistance and documentation support for complex recovery cases.",
      icon: Scale,
    },
    {
      title: "Telephonic Follow-Ups",
      description: "Systematic and professional phone-based recovery with detailed tracking and reporting.",
      icon: Phone,
    },
    {
      title: "Field Visit Teams",
      description: "Trained field agents conducting professional visits across India for effective recovery.",
      icon: Users,
    },
    {
      title: "Digital Monitoring Tools",
      description: "Advanced technology and digital tools for real-time tracking and monitoring of cases.",
      icon: Monitor,
    },
    {
      title: "NBFC and Bank Partnerships",
      description: "Strategic partnerships with leading financial institutions for seamless recovery processes.",
      icon: Handshake,
    },
  ];

  return (
    <div className="bg-[#FFFDFD] overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen bg-[#fceeee] flex items-center">
        <div className="max-w-7xl mx-auto w-full pt-[80px] px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-4xl lg:text-7xl font-bold text-[#2A2A2A] mb-4 sm:mb-6 leading-tight">
                Trusted Recovery Partner Since 2009
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-[#2A2A2A] mb-6 font-light">
                Recovering loans. Rebuilding trust. 15 years strong.
              </p>

              {/* Animated Counter */}
              <motion.div
                className="bg-[#FFFDFD] p-6 rounded-2xl shadow-lg border border-[#F5C6C6] mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-3xl md:text-5xl font-bold mb-2">
                    <AnimatedCounter
                      targetValue={120}
                      prefix="₹"
                      suffix="+ Lakhs"
                      className="text-3xl md:text-5xl font-bold counter-animation"
                    />
                  </div>
                  <p className="text-[#2A2A2A] font-medium">Recovered Nationwide</p>
                  <div className="w-full bg-[#BA0000] rounded-full h-2 mt-4">
                    <motion.div
                      className="bg-gradient-to-r from-[#F5C6C6] to-[#FFE7E7] h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button className="bg-[#BA0000] text-[#FFE7E7] px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#4B1A1A]/90 transition-all duration-200">
                  Recover with Us <ArrowRight className="ml-2" size={20} />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="./assets/Group 9.png"
                alt="Professional business meeting"
                className="w-full max-w-[900px] mx-auto h-auto rounded-2xl"
              />
              <motion.div
                className="absolute bottom-[-1.5rem] right-[-1.5rem] p-4 sm:p-6 rounded-2xl shadow-lg text-[#BA0000] bg-white text-center w-28"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recovery Methods Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2A2A2A] mb-4">Our Recovery Methods</h2>
            <p className="text-lg text-[#2A2A2A] font-light max-w-2xl mx-auto">
              Comprehensive debt recovery solutions tailored to your specific needs with proven methodologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recoveryMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-[#FFFDFD] p-6 md:p-8 rounded-2xl border border-[#F5C6C6] hover:border-[#ba0000] transition-all duration-300 h-full flex flex-col justify-start">
                  <div className="text-[#4B1A1A] mb-4">
                    <method.icon size={48} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2A2A2A] mb-3">{method.title}</h3>
                  <p className="text-[#2A2A2A] font-light">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
