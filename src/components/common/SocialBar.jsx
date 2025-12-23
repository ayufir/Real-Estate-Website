// import {
//   FaInstagram,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";

// export default function SocialBar() {
//   return (
//     <div className="fixed top-1/2 left-6 -translate-y-1/2 z-40 space-y-4">
//       <SocialIcon
//         link="https://instagram.com"
//         icon={<FaInstagram />}
//       />
//       <SocialIcon
//         link="https://facebook.com"
//         icon={<FaFacebookF />}
//       />
//       <SocialIcon
//         link="https://linkedin.com"
//         icon={<FaLinkedinIn />}
//       />
//       <SocialIcon
//         link="https://youtube.com"
//         icon={<FaYoutube />}
//       />
//     </div>
//   );
// }

// function SocialIcon({ link, icon }) {
//   return (
//     <a
//       href={link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="
//         w-12 h-12 rounded-full
//         bg-black/60 backdrop-blur
//         border border-red-600/30
//         flex items-center justify-center
//         text-white text-lg
//         hover:bg-red-600 hover:scale-110 transition
//       "
//     >
//       {icon}
//     </a>
//   );
// }

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function SocialBar() {
  return (
    <div className="fixed top-1/2 left-6 -translate-y-1/2 z-40 space-y-5">
      <SocialIcon link="https://instagram.com" Icon={FaInstagram} />
      <SocialIcon link="https://facebook.com" Icon={FaFacebookF} />
      <SocialIcon link="https://linkedin.com" Icon={FaLinkedinIn} />
      <SocialIcon link="https://youtube.com" Icon={FaYoutube} />
    </div>
  );
}

/* ================= SINGLE ICON ================= */

function SocialIcon({ link, Icon }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="
        w-12 h-12 rounded-full
        flex items-center justify-center
        bg-black/60 backdrop-blur-xl
        border border-red-600/30
        text-white
        transition-all duration-300
        hover:bg-red-600
        hover:shadow-[0_0_20px_rgba(225,6,0,0.7)]
      "
    >
      <Icon className="text-lg text-white pointer-events-none" />
    </motion.a>
  );
}
