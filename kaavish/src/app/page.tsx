"use client";

import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Handshake, Users } from "lucide-react";
import Link from "next/link";

const FeatureCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center"
    >
      <div className="flex justify-center mb-4 text-amber-400">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
);


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <main className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
             <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-amber-400 opacity-20 blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 pt-24 pb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400"
          >
            Building Stronger Futures, <span className="text-amber-400">Together.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-gray-300"
          >
            KAAWISH is a community where growth, connection, and positivity take center stage, equipping the next generation with essential life skills and a supportive network.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10"
          >
            <Link href="/about">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold">
                    Learn Our Story <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </Link>
          </motion.div>
        </div>
      </main>

      <section id="features" className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold">How We Make a Difference</h2>
                <p className="text-gray-400 mt-4 max-w-xl mx-auto">Our initiatives focus on learning through connection and real-world skills.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard 
                    icon={<Sparkles size={40} />}
                    title="Confidence & Communication"
                    description="Through interactive sessions, we help young individuals find their voice and express themselves with clarity."
                    delay={0.2}
                />
                <FeatureCard 
                    icon={<Handshake size={40} />}
                    title="Mentorship & Life Skills"
                    description="We provide practical skills and mentorship that textbooks don't teach, preparing youth for the challenges of adult life."
                    delay={0.4}
                />
                <FeatureCard 
                    icon={<Users size={40} />}
                    title="Positive Community"
                    description="We bring people together to share experiences, mentor one another, and create a culture of encouragement."
                    delay={0.6}
                />
            </div>
        </div>
      </section>

      <section className="py-20 bg-gray-800 bg-opacity-40">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold text-white"
          >
            Ready to Join Our Mission?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-lg text-gray-300"
          >
            Lets grow, connect, and inspire together. Reach out to us today.
          </motion.p>
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.6 }}
             className="mt-8"
          >
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
  );
}