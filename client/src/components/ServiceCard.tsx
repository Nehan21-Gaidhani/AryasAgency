import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export default function ServiceCard({ title, description, icon: Icon, className = "" }: ServiceCardProps) {
  return (
    <motion.div
      className={`h-full flex flex-col justify-between bg-[#FFFDFD] p-8 rounded-2xl shadow-lg border-2 border-[#F5C6C6] hover:border-[#ba0000] transition-all duration-300 service-card ${className}`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <div className="text-[#4B1A1A] text-4xl mb-6">
          <Icon size={48} />
        </div>
        <h3 className="text-xl font-semibold text-[#2A2A2A] mb-4">{title}</h3>
        <p className="text-[#2A2A2A] font-light mb-4 leading-relaxed">{description}</p>
      </div>

      <div className="text-[#ba0000] font-medium cursor-pointer hover:underline mt-4">
        Learn More →
      </div>
    </motion.div>
  );
}
