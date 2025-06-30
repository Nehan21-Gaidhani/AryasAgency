import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import TestimonialCard from "@/components/TestimonialCard";

export default function About() {
  const testimonials = [
    {
      quote: "Aryas Agency's professional approach and ethical practices helped us recover significant amounts while maintaining our client relationships. Highly recommended!",
      name: "Rajesh Kumar",
      position: "CEO, Mumbai Finance",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100",
    },
    {
      quote: "The transparency and regular updates provided by Aryas Agency made our partnership seamless. Excellent recovery rates and professional service.",
      name: "Priya Sharma",
      position: "Director, Delhi NBFC",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108755-2616b612b776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100",
    },
    {
      quote: "15 years of consistent service and ethical practices. Aryas Agency has been our trusted partner for debt recovery across multiple states.",
      name: "Amit Patel",
      position: "Manager, Gujarat Bank",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100",
    },
  ];

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[80px]">
        {/* Company History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#2A2A2A] mb-6">About Aryas Agency</h1>
            <p className="text-lg text-[#2A2A2A] font-light mb-6 leading-relaxed">
              Founded in 2009, Aryas Agency has over 15 years of experience in debt recovery across India. We have built our reputation on ethical practices, transparent processes, and consistent results.
            </p>
            <p className="text-lg text-[#2A2A2A] font-light mb-8 leading-relaxed">
              Our journey began with a simple mission: to bridge the gap between lenders and borrowers through professional, respectful, and effective recovery services. Today, we stand as one of India's most trusted recovery partners.
            </p>

            {/* Mission Statement */}
            <motion.div
              className="bg-[#FFFfff] p-6 rounded-xl border-l-4 border-[#4B1A1A]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-[#2A2A2A] mb-3">Our Mission</h3>
              <p className="text-[#2A2A2A] font-light italic">
                "To provide ethical, effective, and timely loan recovery services with full transparency and trust."
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
              alt="Modern office building"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>


        {/* Owner Section */}
        <motion.div
          className="mb-20 flex flex-col lg:flex-row items-center gap-8 "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="/assets/ownerpic.jpg"
            alt="Owner"
            className="w-80 h-80 rounded-full object-cover object-top shadow-2xl"
          />
          <div className="text-center lg:text-left max-w-2xl">
            <h3 className="text-3xl font-bold text-[#2A2A2A] mb-4">Mr. Rahul Vaidya</h3>
            <p className="text-[#2A2A2A] text-lg font-light leading-relaxed">
              Founder and Managing Director of Aryas Agency, Mr. Rahul Vaidya brings over 20 years of experience in the finance and recovery sector. Known for his ethical approach and visionary leadership, he has built a nationwide reputation for trust and results.
            </p>
          </div>
        </motion.div>


        {/* Statistics Section */}
        <motion.div
          className="bg-[#ffffff] rounded-3xl p-12 mb-20 shadow-lg text-black"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2 ">
                <AnimatedCounter
                  targetValue={120}
                  prefix="₹"
                  suffix="+"
                  className=""
                />
              </div>
              <div className="text-xl">Lakhs Recovered</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">
                <AnimatedCounter
                  targetValue={50}
                  suffix="+"
                  className=""
                />
              </div>
              <div className="text-xl">Professional Agents</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">
                Pan-India
              </div>
              <div className="text-xl">Coverage</div>
            </div>
          </div>
        </motion.div>


        {/* Testimonials Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-[#2A2A2A] text-center mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </motion.div>




      </div>
    </div>
  );
}
