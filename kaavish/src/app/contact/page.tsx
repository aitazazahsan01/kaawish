"use client";

import Navbar from "../../components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
// --- 1. Added Facebook to imports ---
import { MapPin, Mail, Phone, User, Palette, Music, Users, Instagram, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
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
            Get In Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            We are here to answer your questions, collaborate on projects, and build a better future together.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="bg-gray-800 bg-opacity-50 p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Send Us a Message</h2>
            <form action="#" className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-300">Your Name</Label>
                <Input type="text" id="name" placeholder="Bina Syed" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-300">Your Email</Label>
                <Input type="email" id="email" placeholder="kaavish@gmail.com" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-300">Message</Label>
                <Textarea id="message" placeholder="Your message here..." className="mt-2" rows={5} />
              </div>
              <Button type="submit" size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold">
                Submit
              </Button>
            </form>
          </motion.div>

          {/* Right Side: Contact Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="space-y-8"
          >
            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg">
                {/* --- 2. Reorganized the layout of this card --- */}
                <h3 className="text-2xl font-bold mb-4 text-amber-400">Contact Information</h3>
                <div className="space-y-4 text-gray-300">
                    <div className="flex items-start">
                        <User className="w-6 h-6 mr-4 mt-1 text-amber-400 flex-shrink-0" />
                        <div>
                            <p className="font-bold text-white">Ms. Rubina Syed</p>
                            <p>Founder/Director, Kaawish</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <MapPin className="w-6 h-6 mr-4 mt-1 text-amber-400 flex-shrink-0" />
                        <p>H-13, Islamabad, Pakistan</p>
                    </div>
                    <div className="flex items-center">
                        <Mail className="w-5 h-5 mr-4 text-amber-400 flex-shrink-0" />
                        <a href="mailto:info@kaawish.com" className="hover:text-amber-400 transition-colors">info@kaawish.com</a>
                    </div>
                     <div className="flex items-center">
                        <Phone className="w-5 h-5 mr-4 text-amber-400 flex-shrink-0" />
                        <a href="tel:+923331234567" className="hover:text-amber-400 transition-colors">+92 333 1234567 (Example)</a>
                    </div>
                </div>

                {/* --- 3. Updated "Follow Us" section with new links --- */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                    <h4 className="font-bold text-white mb-3">Follow Us</h4>
                    <div className="flex items-center space-x-4">
                        <Link href="https://www.instagram.com/bina.syedkaawish" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-amber-400 transition-colors">
                            <Instagram className="w-6 h-6 mr-2"/>
                            Instagram
                        </Link>
                        <Link href="https://www.facebook.com/share/16NwvEztpR/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-amber-400 transition-colors">
                            <Facebook className="w-6 h-6 mr-2"/>
                            Facebook
                        </Link>
                        <Link href="https://www.linkedin.com/company/kaawish-pk" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-amber-400 transition-colors">
                            <Linkedin className="w-6 h-6 mr-2"/>
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-amber-400">Our Mission</h3>
                <div className="space-y-3">
                    <div className="flex items-center text-gray-300"><Palette className="w-5 h-5 mr-3 text-amber-400"/> Promote Art & Culture</div>
                    <div className="flex items-center text-gray-300"><Users className="w-5 h-5 mr-3 text-amber-400"/> Empower Women & Youth</div>
                    <div className="flex items-center text-gray-300"><Music className="w-5 h-5 mr-3 text-amber-400"/> Cultivate Strong Minds</div>
                </div>
            </div>

            {/* Embedded Map */}
            <div className="rounded-lg overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.431520194882!2d73.0567623152056!3d33.74933998069943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf7a77e52331%3A0x7873837e23348f65!2sH-13%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1657890123456!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}