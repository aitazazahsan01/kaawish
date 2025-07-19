"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

// A reusable component for future blog post cards
const BlogPostCard = ({ title, excerpt, author, date, delay }: { title: string, excerpt: string, author: string, date: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden group"
    >
        <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-400 transition-colors">{title}</h3>
            <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
                <div className="flex items-center"><User className="w-4 h-4 mr-2" /> {author}</div>
                <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {date}</div>
            </div>
            <p className="text-gray-300 mb-4">{excerpt}</p>
            <Button variant="link" className="p-0 text-amber-400">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
    </motion.div>
);


export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
            Insights from Kaawish
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Explore our thoughts on community, culture, and empowerment.
          </p>
        </motion.div>

        {/* Featured Podcast Section -- FINAL CORRECTED LINK */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          className="mt-16 md:mt-24"
        >
            <div className="bg-gray-800 bg-opacity-40 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8">
                {/* Embedded Video Player */}
                <div className="aspect-video rounded-lg overflow-hidden">
                   <iframe
                        src="https://www.youtube.com/embed/VIDEO_ID"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>

                {/* Video Details */}
                <div className="text-left">
                    <p className="text-sm font-bold text-amber-400 mb-2">FEATURED PODCAST</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        LIVE | Morning Show | Aik aur Subh | Bina Syed & Rumana Gulzar
                    </h2>
                    <p className="text-gray-300">
                        Join Ms. Rubina Syed on the (Aik aur Subh) morning show as she discusses youth empowerment, the importance of skills-based education, and fostering an entrepreneurial mindset. A must-watch for insights on shaping a better future.
                    </p>
                </div>
            </div>
        </motion.section>


        {/* Latest Articles Section */}
        <section className="mt-16 md:mt-24">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
                Latest Articles
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <BlogPostCard
                    title="The Power of Community in Youth Development"
                    excerpt="Discover how strong community bonds can foster an environment of growth, support, and success for the next generation..."
                    author="Bina Syed"
                    date="July 10, 2025"
                    delay={0.2}
                />
                <BlogPostCard
                    title="Art as a Voice for the Voiceless"
                    excerpt="An exploration into how artistic expression can empower marginalized communities and bring about social change..."
                    author="Kaawish Team"
                    date="June 28, 2025"
                    delay={0.4}
                />
                <BlogPostCard
                    title="Fostering an Entrepreneurial Spirit in Education"
                    excerpt="Moving beyond traditional learning to equip students with the practical skills and mindset needed to innovate and lead..."
                    author="Bina Syed"
                    date="June 15, 2025"
                    delay={0.6}
                />
            </div>
        </section>
      </main>

    </div>
  );
}