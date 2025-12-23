// // // import {
// // //   FaInstagram,
// // //   FaFacebookF,
// // //   FaLinkedinIn,
// // //   FaYoutube,
// // //   FaWhatsapp,
// // // } from "react-icons/fa";

// // // export default function Footer() {
// // //   return (
// // //     <footer className="mt-40 border-t border-white/10 bg-black/40 backdrop-blur">
// // //       <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-12">

// // //         {/* BRAND */}
// // //         <div>
// // //           <h2 className="text-3xl font-bold text-red-600 mb-4">
// // //             LUXESTATE
// // //           </h2>
// // //           <p className="opacity-70 leading-relaxed">
// // //             Premium real estate advisory delivering luxury homes,
// // //             elite investments, and timeless value in India & abroad.
// // //           </p>
// // //         </div>

// // //         {/* QUICK LINKS */}
// // //         <div>
// // //           <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
// // //           <ul className="space-y-3 opacity-80">
// // //             <li><a href="/">Home</a></li>
// // //             <li><a href="/properties">Properties</a></li>
// // //             <li><a href="/about">About</a></li>
// // //             <li><a href="/contact">Contact</a></li>
// // //           </ul>
// // //         </div>

// // //         {/* SOCIAL + WHATSAPP */}
// // //         <div>
// // //           <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>

// // //           <div className="flex gap-4 mb-6">
// // //             <SocialIcon icon={<FaInstagram />} link="https://instagram.com" />
// // //             <SocialIcon icon={<FaFacebookF />} link="https://facebook.com" />
// // //             <SocialIcon icon={<FaLinkedinIn />} link="https://linkedin.com" />
// // //             <SocialIcon icon={<FaYoutube />} link="https://youtube.com" />
// // //           </div>

// // //           <a
// // //             href="https://wa.me/919999999999?text=Hello%20LuxEstate,%20I%20am%20interested%20in%20your%20properties."
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             className="inline-flex items-center gap-3 px-6 py-3 border border-green-500 text-green-400 rounded-xl hover:bg-green-500 hover:text-white transition"
// // //           >
// // //             <FaWhatsapp /> Chat on WhatsApp
// // //           </a>
// // //         </div>
// // //       </div>

// // //       <div className="text-center py-6 border-t border-white/10 opacity-60 text-sm">
// // //         © {new Date().getFullYear()} LuxEstate. All rights reserved.
// // //       </div>
// // //     </footer>
// // //   );
// // // }

// // // function SocialIcon({ icon, link }) {
// // //   return (
// // //     <a
// // //       href={link}
// // //       target="_blank"
// // //       rel="noopener noreferrer"
// // //       className="w-12 h-12 rounded-full flex items-center justify-center
// // //       border border-red-600/30 hover:bg-red-600 transition"
// // //     >
// // //       {icon}
// // //     </a>
// // //   );
// // // }


// // import {
// //   FaInstagram,
// //   FaFacebookF,
// //   FaLinkedinIn,
// //   FaYoutube,
// //   FaWhatsapp,
// // } from "react-icons/fa";
// // import { motion } from "framer-motion";

// // export default function Footer() {
// //   return (
// //     <footer className="mt-40 border-t border-white/10 bg-black/70 backdrop-blur-xl">
// //       {/* MAIN FOOTER */}
// //       <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-3 gap-16">

// //         {/* BRAND STORY */}
// //         <div>
// //           <h2 className="text-3xl font-extrabold tracking-wide mb-6">
// //             <span className="text-red-600">LUX</span>ESTATE
// //           </h2>

// //           <p className="opacity-75 leading-relaxed text-lg">
// //             A private luxury real estate advisory delivering elite residences,
// //             investment-grade assets, and discreet global opportunities for
// //             high-net-worth clients.
// //           </p>

// //           <p className="mt-6 text-sm uppercase tracking-widest opacity-50">
// //             Confidential • Global • Investor-Focused
// //           </p>
// //         </div>

// //         {/* NAVIGATION */}
// //         <div>
// //           <h3 className="text-xl font-semibold mb-6">
// //             Explore
// //           </h3>

// //           <ul className="space-y-4 text-lg opacity-80">
// //             {["Home", "Properties", "About", "Contact"].map((item) => (
// //               <li key={item}>
// //                 <a
// //                   href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
// //                   className="relative hover:text-red-500 transition
// //                     after:absolute after:left-0 after:-bottom-1
// //                     after:h-[2px] after:w-0 after:bg-red-600
// //                     hover:after:w-full after:transition-all"
// //                 >
// //                   {item}
// //                 </a>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* CONNECT */}
// //         <div>
// //           <h3 className="text-xl font-semibold mb-6">
// //             Private Connect
// //           </h3>

// //           {/* SOCIAL ICONS */}
// //           <div className="flex gap-5 mb-8">
// //             <SocialIcon icon={<FaInstagram />} link="https://instagram.com" />
// //             <SocialIcon icon={<FaFacebookF />} link="https://facebook.com" />
// //             <SocialIcon icon={<FaLinkedinIn />} link="https://linkedin.com" />
// //             <SocialIcon icon={<FaYoutube />} link="https://youtube.com" />
// //           </div>

// //           {/* WHATSAPP CTA */}
// //           <a
// //             href="https://wa.me/919999999999?text=Hello%20LuxEstate,%20I%20am%20interested%20in%20your%20luxury%20properties."
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="
// //               inline-flex items-center gap-4 px-8 py-4
// //               rounded-2xl text-lg font-semibold
// //               border border-green-500 text-green-400
// //               hover:bg-green-500 hover:text-white
// //               transition-all duration-300
// //             "
// //           >
// //             <FaWhatsapp className="text-2xl" />
// //             Speak on WhatsApp
// //           </a>

// //           <p className="text-sm opacity-50 mt-4">
// //             Direct access • No spam • Private advisors only
// //           </p>
// //         </div>
// //       </div>

// //       {/* BOTTOM BAR */}
// //       <div className="border-t border-white/10 py-6 text-center text-sm opacity-60">
// //         © {new Date().getFullYear()} LuxEstate. All Rights Reserved.
// //       </div>
// //     </footer>
// //   );
// // }

// // /* ================= SOCIAL ICON ================= */

// // function SocialIcon({ icon, link }) {
// //   return (
// //     <motion.a
// //       href={link}
// //       target="_blank"
// //       rel="noopener noreferrer"
// //       whileHover={{ scale: 1.15 }}
// //       whileTap={{ scale: 0.95 }}
// //       className="
// //         w-12 h-12 rounded-full flex items-center justify-center
// //         border border-red-600/30 text-xl
// //         hover:bg-red-600 hover:text-white
// //         transition-all duration-300
// //       "
// //     >
// //       {icon}
// //     </motion.a>
// //   );
// // }

// import {
//   FaInstagram,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaYoutube,
//   FaWhatsapp,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function Footer() {
//   return (
//     <footer className="mt-40 border-t border-white/10 bg-black/70 backdrop-blur-xl">

//       {/* ================= MAIN FOOTER ================= */}
//       <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-3 gap-16">

//         {/* BRAND STORY */}
//         <div>
//           <h2 className="text-3xl font-extrabold tracking-wide mb-6">
//             <span className="text-red-600">LUX</span>ESTATE
//           </h2>

//           <p className="opacity-75 leading-relaxed text-lg">
//             A private luxury real estate advisory delivering elite residences,
//             investment-grade assets, and discreet global opportunities for
//             high-net-worth clients.
//           </p>

//           <p className="mt-6 text-sm uppercase tracking-widest opacity-50">
//             Confidential • Global • Investor-Focused
//           </p>
//         </div>

//         {/* NAVIGATION */}
//         <div>
//           <h3 className="text-xl font-semibold mb-6">Explore</h3>

//           <ul className="space-y-4 text-lg opacity-80">
//             {["Home", "Properties", "About", "Contact"].map((item) => (
//               <li key={item}>
//                 <a
//                   href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
//                   className="
//                     relative hover:text-red-500 transition
//                     after:absolute after:left-0 after:-bottom-1
//                     after:h-[2px] after:w-0 after:bg-red-600
//                     hover:after:w-full after:transition-all
//                   "
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* CONNECT */}
//         <div>
//           <h3 className="text-xl font-semibold mb-6">Private Connect</h3>

//           {/* SOCIAL ICONS */}
//           <div className="flex gap-5 mb-8">
//             <SocialIcon icon={FaInstagram} link="https://instagram.com" />
//             <SocialIcon icon={FaFacebookF} link="https://facebook.com" />
//             <SocialIcon icon={FaLinkedinIn} link="https://linkedin.com" />
//             <SocialIcon icon={FaYoutube} link="https://youtube.com" />
//           </div>

//           {/* WHATSAPP CTA */}
//           <a
//             href="https://wa.me/919999999999?text=Hello%20LuxEstate,%20I%20am%20interested%20in%20your%20luxury%20properties."
//             target="_blank"
//             rel="noopener noreferrer"
//             className="
//               inline-flex items-center gap-4 px-8 py-4
//               rounded-2xl text-lg font-semibold
//               border border-green-500 text-green-400
//               hover:bg-green-500 hover:text-white
//               transition-all duration-300
//             "
//           >
//             <FaWhatsapp className="text-2xl" />
//             Speak on WhatsApp
//           </a>

//           <p className="text-sm opacity-50 mt-4">
//             Direct access • No spam • Private advisors only
//           </p>
//         </div>
//       </div>

//       {/* ================= BOTTOM BAR ================= */}
//       <div className="border-t border-white/10 py-6 text-center text-sm opacity-60">
//         © {new Date().getFullYear()} LuxEstate. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }

// /* ================= SOCIAL ICON ================= */

// function SocialIcon({ icon: Icon, link }) {
//   return (
//     <motion.a
//       href={link}
//       target="_blank"
//       rel="noopener noreferrer"
//       whileHover={{ scale: 1.15 }}
//       whileTap={{ scale: 0.95 }}
//       className="
//         w-12 h-12 rounded-full
//         flex items-center justify-center

//         bg-black/40
//         border border-red-600/40
//         text-white

//         hover:bg-red-600
//         hover:text-white

//         active:bg-red-700
//         active:text-white

//         transition-all duration-300
//       "
//     >
//       <Icon className="text-xl" />
//     </motion.a>
//   );
// }








import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mt-40 border-t border-white/10 bg-black/70 backdrop-blur-xl">

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-3 gap-16">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-wide mb-6">
            <span className="text-red-600">LUX</span>ESTATE
          </h2>

          <p className="opacity-75 leading-relaxed text-lg">
            A private luxury real estate advisory delivering elite residences,
            investment-grade assets, and discreet global opportunities for
            high-net-worth clients.
          </p>

          <p className="mt-6 text-sm uppercase tracking-widest opacity-50">
            Confidential • Global • Investor-Focused
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Explore</h3>

          <ul className="space-y-4 text-lg opacity-80">
            {["Home", "Properties", "About", "Contact", "Projects"].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="
                    relative hover:text-red-500 transition
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0 after:bg-red-600
                    hover:after:w-full after:transition-all
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Private Connect</h3>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mb-8">
            <SocialIcon icon={FaInstagram} link="https://instagram.com" />
            <SocialIcon icon={FaFacebookF} link="https://facebook.com" />
            <SocialIcon icon={FaLinkedinIn} link="https://linkedin.com" />
            <SocialIcon icon={FaYoutube} link="https://youtube.com" />
          </div>

          {/* WHATSAPP CTA */}
          <a
            href="https://wa.me/919999999999?text=Hello%20LuxEstate,%20I%20am%20interested%20in%20your%20luxury%20properties."
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-4 px-8 py-4
              rounded-2xl text-lg font-semibold
              border border-green-500 text-green-400
              hover:bg-green-500 hover:text-white
              transition-all duration-300
            "
          >
            <FaWhatsapp className="text-2xl" />
            Speak on WhatsApp
          </a>

          <p className="text-sm opacity-50 mt-4">
            Direct access • No spam • Private advisors only
          </p>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10 py-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} LuxEstate. All Rights Reserved.
      </div>
    </footer>
  );
}

/* ================= SOCIAL ICON (FIXED) ================= */

function SocialIcon({ icon: Icon, link }) {
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

        bg-black/50
        border border-red-600/40

        hover:bg-red-600
        shadow-md hover:shadow-[0_0_18px_rgba(225,6,0,0.6)]

        transition-all duration-300
      "
    >
      {/* 🔥 ICON COLOR LOCKED (NEVER DISAPPEARS) */}
      <Icon className="text-xl text-white pointer-events-none" />
    </motion.a>
  );
}
