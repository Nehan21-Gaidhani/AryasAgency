import { motion } from "framer-motion";
import { Building2, User, FileText, Gavel, University } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Corporate Loan Recovery",
      description:
        "Specialized recovery services for corporate loans with strategic negotiation and legal support. Professional handling of complex business debt scenarios.",
      icon: Building2,
    },
    {
      title: "Personal Loan Recovery",
      description:
        "Ethical and effective personal loan recovery with respectful communication. Customized approach for individual borrower circumstances.",
      icon: User,
    },
    {
      title: "Cheque Bounce Follow-Up",
      description:
        "Systematic follow-up on bounced cheques with legal documentation and professional communication. Swift resolution process.",
      icon: FileText,
    },
    {
      title: "Legal Action Support",
      description:
        "Complete legal support and documentation for recovery cases requiring judicial intervention. Expert legal guidance throughout the process.",
      icon: Gavel,
    },
    {
      title: "Bank/NBFC Collection Support",
      description:
        "Dedicated collection support for banks and NBFCs with comprehensive reporting and transparent processes. Partnership-based approach.",
      icon: University,
    },
  ];

  return (
    <div className="py-20 pt-32 bg-[#FFFfff] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#2A2A2A] mb-4">
            Our Services
          </h1>
          <p className="text-lg text-[#2A2A2A] font-light max-w-2xl mx-auto">
            Comprehensive debt recovery solutions designed to meet the diverse needs of our clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full">
                <ServiceCard {...service} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
