import React from 'react';
import { motion } from 'framer-motion';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, GithubIcon } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-[#0f0f0f] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#4e1b92] to-purple-300 bg-clip-text text-transparent mb-6">
              LUNARIS
            </h3>
            <p className="text-gray-400 mb-6">
              Transforming ideas into digital reality through innovative
              technology solutions and strategic marketing.
            </p>
            <div className="flex space-x-4">
              {[{
              icon: <FacebookIcon size={18} />,
              href: '#'
            }, {
              icon: <TwitterIcon size={18} />,
              href: '#'
            }, {
              icon: <InstagramIcon size={18} />,
              href: '#'
            }, {
              icon: <LinkedinIcon size={18} />,
              href: '#'
            }, {
              icon: <GithubIcon size={18} />,
              href: '#'
            }].map((social, index) => <motion.a key={index} href={social.href} className="w-8 h-8 rounded-full bg-[#282524] flex items-center justify-center text-gray-400 hover:bg-[#4e1b92] hover:text-white transition-all" whileHover={{
              y: -3
            }} whileTap={{
              scale: 0.95
            }}>
                  {social.icon}
                </motion.a>)}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'Digital Marketing', 'Data Analytics', 'UI/UX Design'].map((item, index) => <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {['About', 'Projects', 'Team', 'Careers', 'Contact'].map((item, index) => <li key={index}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-purple-300 transition-colors">
                      {item}
                    </a>
                  </li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'].map((item, index) => <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-[#282524] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Lunaris Technology. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Founded in 2024 | São Paulo, Brazil
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;