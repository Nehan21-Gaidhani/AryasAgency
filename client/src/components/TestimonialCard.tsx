import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  imageUrl: string;
}

export default function TestimonialCard({ quote, name, position, imageUrl }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-[#FFFDFD] p-8 rounded-2xl border border-[#F5C6C6]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-[#4B1A1A] text-2xl mb-4">
        <Quote size={24} />
      </div>
      <p className="text-[#2A2A2A] font-light mb-6 italic leading-relaxed">
        "{quote}"
      </p>
      <div className="flex items-center">
        <img 
          src={imageUrl} 
          alt={`${name} testimonial`} 
          className="w-12 h-12 rounded-full mr-4 object-cover" 
        />
        <div>
          <div className="font-semibold text-[#2A2A2A]">{name}</div>
          <div className="text-sm text-[#F5C6C6]">{position}</div>
        </div>
      </div>
    </motion.div>
  );
}
