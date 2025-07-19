"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Sparkles, Handshake, Heart, MessageSquare } from "lucide-react";
import Link from "next/link";

// --- UPDATED TeamMemberCard to include a description ---
const TeamMemberCard = ({ image, name, title, description, linkedIn }: { image: string, name: string, title: string, description: string, linkedIn: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center bg-gray-800 bg-opacity-50 p-6 rounded-lg flex flex-col items-center"
    >
        <Image src={image} alt={name} width={150} height={150} className="rounded-full mx-auto mb-4 shadow-lg" />
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-amber-400 mb-3">{title}</p>
        {/* --- ADDED DESCRIPTION --- */}
        <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>
        <Link href={linkedIn} target="_blank" rel="noopener noreferrer" className="inline-block text-gray-400 hover:text-white transition-colors mt-auto">
            <Linkedin size={24} />
        </Link>
    </motion.div>
);

const WhatWeDoCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="text-center p-4"
    >
        <div className="flex justify-center items-center mb-4 text-amber-400">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </motion.div>
);


export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <main>
                <section className="relative isolate overflow-hidden py-24 md:py-32">
                    <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                    <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 m-auto h-[310px] w-[310px] rounded-full bg-amber-500 opacity-20 blur-[100px]"></div>
                    <div className="container mx-auto px-6 lg:px-8 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: -40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, type: "spring" }}
                            className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400"
                        >
                            About KAAWISH: Building Stronger Futures, Together
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="mt-6 max-w-3xl mx-auto text-lg text-gray-300"
                        >
                            Welcome to a community born from a simple yet powerful belief: every young person deserves the tools, guidance, and confidence to thrive in life.
                        </motion.p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-4">Who We Are</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We understand that the journey from youth to adulthood isn’t always easy. That’s why KAWISH exists—to create a safe, inspiring space where young minds can develop confidence, communication skills, and the resilience needed to navigate life’s challenges.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Our name, Kawish meaning (ambition), reflects our core mission: to fuel the dreams of the next generation by equipping them with essential life skills, mentorship, and a supportive network.
                            </p>
                        </motion.div>
                         <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-4">Why It Matters</h2>
                            <p className="text-gray-300 leading-relaxed">
                               In a world where self-doubt and distractions are everywhere, we are here to remind every young person: <span className="text-amber-400 font-semibold">You are capable. You belong. You have something valuable to offer.</span> Join us in shaping a generation that’s not just skilled, but also kind, confident, and ready to lead.
                            </p>
                        </motion.div>
                    </div>
                </section>
                
                <section className="py-20 bg-gray-800 bg-opacity-20">
                    <div className="container mx-auto px-6 lg:px-8">
                         <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-bold text-center mb-12"
                        >
                            Meet the Leadership
                        </motion.h2>
                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* --- ADDED DESCRIPTIONS BELOW --- */}
                            <TeamMemberCard 
                                name="Ms. Rubina Syed" 
                                title="Founder & Director" 
                                image="/bina.jpeg" 
                                description="The visionary founder of Kaawish, Rubina is a passionate community leader and educator dedicated to nurturing the potential of the next generation."
                                linkedIn="https://www.linkedin.com/in/bina-syed-4b346a193/" 
                            />
                            <TeamMemberCard 
                                name="Dr. Sarah Shafqat" 
                                title="CEO" 
                                image="/sarah.jpg" 
                                description="As CEO, Sarah drives the strategic vision of Kaawish, translating our mission into impactful programs that foster growth and empowerment."
                                linkedIn="https://www.linkedin.com/in/sarahshafqat/" 
                            />
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-6 lg:px-8">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-bold text-center mb-12"
                        >
                            What We Do
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                           <WhatWeDoCard icon={<MessageSquare size={40}/>} title="Build Confidence" description="Helping young individuals find their voice and express themselves with clarity and conviction." delay={0.1} />
                           <WhatWeDoCard icon={<Sparkles size={40}/>} title="Prepare for Adult Life" description="Providing practical skills, from leadership training to emotional intelligence, that textbooks don’t teach." delay={0.2} />
                           <WhatWeDoCard icon={<Handshake size={40}/>} title="Foster Community" description="Bringing people together to share experiences, mentor one another, and create a culture of encouragement." delay={0.3} />
                           <WhatWeDoCard icon={<Heart size={40}/>} title="Grow Mindsets" description="Inspiring youth to believe in their potential and take bold steps forward through real stories and guidance." delay={0.4} />
                        </div>
                    </div>
                </section>
            </main>
            {/* --- Footer component is now removed from this page --- */}
        </div>
    );
}