import Link from "next/link";
import Image from "next/image";
// --- 1. Added Facebook icon to the import ---
import { Instagram, Linkedin, Facebook } from "lucide-react";

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
        {icon}
    </Link>
);

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo and Brand Name */}
                    <div className="flex items-center space-x-3 mb-6 md:mb-0">
                        <Image src="/logo.jpg" alt="Kaawish Logo" width={40} height={40} className="rounded-full" />
                        <span className="text-xl font-semibold text-white">کاوِش</span>
                    </div>

                    {/* Copyright */}
                    <div className="text-gray-400 text-sm mb-6 md:mb-0">
                        &copy; {currentYear} Kaawish. All Rights Reserved.
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center space-x-6">
                       <SocialLink href="https://www.instagram.com/bina.syedkaawish" icon={<Instagram size={24} />} />
                       {/* --- 2. Added Facebook link --- */}
                       <SocialLink href="https://www.facebook.com/share/16NwvEztpR/" icon={<Facebook size={24} />} />
                       {/* --- 3. Replaced LinkedIn link --- */}
                       <SocialLink href="https://www.linkedin.com/company/kaawish-pk" icon={<Linkedin size={24} />} />
                    </div>
                </div>
            </div>
        </footer>
    );
}