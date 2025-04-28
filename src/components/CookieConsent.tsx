import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, CookieIcon } from 'lucide-react';
interface CookieConsentProps {
  onAccept: () => void;
}
const CookieConsent = ({
  onAccept
}: CookieConsentProps) => {
  return <AnimatePresence>
      <motion.div className="fixed bottom-0 left-0 right-0 z-50 p-4" initial={{
      y: 100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} exit={{
      y: 100,
      opacity: 0
    }} transition={{
      type: 'spring',
      stiffness: 400,
      damping: 40
    }}>
        <div className="container mx-auto">
          <div className="bg-[#1a1a1a] border border-[#282524] rounded-xl p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start">
              <div className="bg-[#4e1b92]/20 p-3 rounded-lg mr-4">
                <CookieIcon size={24} className="text-purple-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Cookie Notice</h3>
                <p className="text-gray-400 text-sm">
                  We use cookies to enhance your browsing experience, serve
                  personalized ads or content, and analyze our traffic. By
                  clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 ml-0 md:ml-4">
              <button className="px-5 py-2 bg-transparent border border-[#4e1b92] text-white rounded-lg hover:bg-[#4e1b92]/10 transition-colors text-sm" onClick={onAccept}>
                Necessary Only
              </button>
              <motion.button className="px-5 py-2 bg-[#4e1b92] text-white rounded-lg hover:bg-[#5f2ba3] transition-colors text-sm" onClick={onAccept} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                Accept All
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>;
};
export default CookieConsent;