"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ServiceSection = ({ title, description, image, reverse = false }: { title: string, description: string, image: string, reverse?: boolean }) => (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
        <motion.div
            initial={{ opacity: 0, x: reverse ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`w-full h-80 relative rounded-lg overflow-hidden shadow-2xl shadow-amber-500/10 ${reverse ? 'lg:col-start-2' : ''}`}
        >
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
            />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: reverse ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
            <h2 className="text-3xl font-bold text-amber-400 mb-4">{title}</h2>
            <p className="text-gray-300 leading-relaxed">{description}</p>
        </motion.div>
    </div>
);


export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <main>
                <section className="py-24 md:py-32 text-center relative isolate overflow-hidden">
                    <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                    <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 m-auto h-[310px] w-[310px] rounded-full bg-amber-500 opacity-20 blur-[100px]"></div>
                    <div className="container mx-auto px-6 lg:px-8">
                        <motion.h1
                            initial={{ opacity: 0, y: -40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, type: "spring" }}
                            className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400"
                        >
                            Our Core Initiatives
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="mt-6 max-w-2xl mx-auto text-lg text-gray-300"
                        >
                            We are committed to driving meaningful change through a series of targeted programs designed to build a more equitable and empowered society.
                        </motion.p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-6 lg:px-8 space-y-24">
                        <ServiceSection
                            title="Fight Gender Inequality"
                            description="We champion equality by challenging stereotypes, advocating for women's rights, and creating safe spaces where all genders can thrive. Our programs focus on education and dialogue to dismantle systemic barriers and foster mutual respect."
                            image="/gender.jpeg"
                        />
                         <ServiceSection
                            title="Economic Empowerment"
                            description="We provide women and youth with the tools for financial independence. Through skill-building workshops, vocational training, and entrepreneurship support, we help individuals create sustainable livelihoods for themselves and their families."
                            image="/economic.jpeg"
                            reverse={true}
                        />
                         <ServiceSection
                            title="Strengthen Business Initiatives"
                            description="For aspiring entrepreneurs, we offer mentorship and resources to help turn ideas into reality. We connect new business owners with experienced leaders and provide guidance on strategy, marketing, and sustainable growth."
                            image="/business.jpeg"
                        />
                        <ServiceSection
                            title="Promote the Power of Education"
                            description="Education is the cornerstone of progress. We work to improve access to quality education for all, supporting students with resources, tutoring, and scholarships to ensure they can achieve their full academic potential."
                            image="/proomote.jpeg"
                             reverse={true}
                        />
                        <ServiceSection
                            title="Good Health & Wellbeing"
                            description="A healthy community is a strong community. We run awareness campaigns and workshops focused on physical and mental health, providing resources and support to encourage balanced, healthy lifestyles."
                            image="/exercise.jpeg"
                        />
                         <ServiceSection
                            title="Cultivate Strong Minds"
                            description="We focus on developing resilience, emotional intelligence, and a positive mindset. Our programs are designed to help youth navigate life's pressures with confidence and build the mental fortitude to overcome any obstacle."
                            image="/mind.png"
                            reverse={true}
                        />
                    </div>
                </section>
                
                <section className="py-20 bg-gray-800 bg-opacity-20">
                    <div className="container mx-auto px-6 lg:px-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-white"
                    >
                        Partner With Us to Create Impact
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-lg text-gray-300 max-w-xl mx-auto"
                    >
                        Your journey with Kaawish starts here. Whether you are looking to participate, volunteer, or collaborate, we want to hear from you.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-8"
                    >
                        <Link href="/contact">
                        <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold">
                            Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        </Link>
                    </motion.div>
                    </div>
                </section>
            </main>
</div>
    );
}