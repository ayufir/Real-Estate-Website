// import { useEffect, useRef, useState } from "react";
// import { reveal } from "../animations/scroll.gsap";
// import SectionTitle from "../components/common/SectionTitle";

// export default function Contact() {
//   const pageRef = useRef(null);
//   const formRef = useRef(null);
//   const infoRef = useRef(null);
//   const mapRef = useRef(null);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     purpose: "",
//     message: "",
//   });

//   useEffect(() => {
//     reveal(pageRef.current);
//     reveal(formRef.current);
//     reveal(infoRef.current);
//     reveal(mapRef.current);
//   }, []);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const text = `
// New Private Inquiry – LuxEstate

// Name: ${form.name}
// Email: ${form.email}
// Phone: ${form.phone}
// Purpose: ${form.purpose}

// Message:
// ${form.message}
//     `;

//     window.open(
//       `https://wa.me/919999999999?text=${encodeURIComponent(text)}`,
//       "_blank"
//     );
//   };

//   return (
//     <section ref={pageRef} className="pt-32 pb-40">

//       {/* ================= HEADER ================= */}
//       <div className="text-center max-w-3xl mx-auto mb-24 px-6">
//         <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
//           Private <span className="text-red-600">Consultation</span>
//         </h1>
//         <p className="text-lg md:text-xl opacity-80 leading-relaxed">
//           Speak directly with our luxury real estate advisors for discreet
//           buying, investment, or private opportunities.
//         </p>
//       </div>

//       {/* ================= FORM + INFO ================= */}
//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">

//         {/* FORM */}
//         <div
//           ref={formRef}
//           className="glass p-12 rounded-3xl border border-red-600/30"
//         >
//           <h2 className="text-3xl font-semibold mb-10">
//             Send an Inquiry
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <Input name="name" placeholder="Full Name" onChange={handleChange} />
//             <Input
//               name="email"
//               type="email"
//               placeholder="Email Address"
//               onChange={handleChange}
//             />
//             <Input
//               name="phone"
//               placeholder="Phone Number"
//               onChange={handleChange}
//             />

//             <select
//               name="purpose"
//               onChange={handleChange}
//               className="w-full p-4 bg-transparent border border-white/20 rounded-xl"
//             >
//               <option value="">Purpose of Inquiry</option>
//               <option>Buying a Property</option>
//               <option>Investment Advisory</option>
//               <option>Private Partnership</option>
//               <option>General Question</option>
//             </select>

//             <textarea
//               name="message"
//               rows="4"
//               placeholder="Your Message"
//               onChange={handleChange}
//               className="w-full p-4 bg-transparent border border-white/20 rounded-xl"
//             />

//             <button
//               type="submit"
//               className="
//                 w-full py-4 text-lg rounded-xl
//                 border border-green-500 text-green-400
//                 hover:bg-green-500 hover:text-white transition
//               "
//             >
//               Send via WhatsApp
//             </button>

//             <p className="text-xs opacity-60 text-center">
//               We respect your privacy. No spam. No mass marketing.
//             </p>
//           </form>
//         </div>

//         {/* INFO */}
//         <div ref={infoRef} className="space-y-10">
//           <InfoCard title="Head Office">
//             LuxEstate Advisory Group <br />
//             Business Bay <br />
//             Dubai, United Arab Emirates
//           </InfoCard>

//           <InfoCard title="Direct Contact">
//             📞 +91 99XX-XXX-XXX <br />
//             ✉️ contact@luxestate.com
//           </InfoCard>

//           <InfoCard title="Business Hours">
//             Mon – Fri: 9:00 AM – 7:00 PM <br />
//             Sat: 10:00 AM – 4:00 PM <br />
//             Sunday: Closed
//           </InfoCard>
//         </div>
//       </div>

//       {/* ================= ULTRA LUXURY MAP ================= */}
//       <div
//         ref={mapRef}
//         className="mt-36 px-6 max-w-6xl mx-auto"
//       >
//         <SectionTitle
//           title="Visit Our Private Office"
//           subtitle="A discreet space for confidential meetings"
//         />

//         <div className="relative group">

//           {/* MAP */}
//           <div className="
//             glass p-3 rounded-3xl border border-red-600/20
//             overflow-hidden transition-transform duration-500
//             group-hover:scale-[1.01]
//           ">
//             <iframe
//               title="LuxEstate Location"
//               className="
//                 w-full h-[420px] rounded-2xl
//                 grayscale contrast-125 brightness-90
//               "
//               src="https://maps.google.com/maps?q=Dubai%20Business%20Bay&t=&z=13&output=embed"
//               loading="lazy"
//             />
//           </div>

//           {/* GRADIENT */}
//           <div className="
//             pointer-events-none absolute inset-0 rounded-3xl
//             bg-gradient-to-t from-black/60 via-transparent to-black/30
//           " />

//           {/* FLOATING INFO */}
//           <div className="
//             absolute bottom-8 left-8
//             glass px-8 py-6 rounded-2xl
//             border border-red-600/30
//             max-w-sm backdrop-blur-xl
//           ">
//             <p className="text-xs uppercase tracking-widest opacity-60 mb-2">
//               Head Office
//             </p>

//             <h3 className="text-xl font-semibold mb-1">
//               LuxEstate Advisory
//             </h3>

//             <p className="opacity-80 text-sm leading-relaxed">
//               Business Bay <br />
//               Dubai, UAE
//             </p>

//             <span className="
//               inline-block mt-4 px-4 py-1.5 text-xs
//               border border-red-600/40 text-red-400 rounded-full
//             ">
//               By Appointment Only
//             </span>
//           </div>
//         </div>

//         <p className="text-center mt-8 text-sm opacity-60">
//           Private consultations • Secure location • Discreet access
//         </p>
//       </div>

//       {/* ================= FINAL CTA ================= */}
//       <div className="text-center mt-40 px-6">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">
//           Your Luxury Journey Starts Here
//         </h2>
//         <p className="opacity-80 text-lg mb-10 max-w-2xl mx-auto">
//           Take the first step toward owning or investing in world-class real estate.
//         </p>

//         <a
//           href="/properties"
//           className="
//             glass px-14 py-5 text-lg inline-block
//             rounded-xl hover:scale-105 transition
//           "
//         >
//           Explore Properties
//         </a>
//       </div>
//     </section>
//   );
// }

// /* ---------- SMALL COMPONENTS ---------- */

// function Input({ name, type = "text", placeholder, onChange }) {
//   return (
//     <input
//       name={name}
//       type={type}
//       placeholder={placeholder}
//       required
//       onChange={onChange}
//       className="w-full p-4 bg-transparent border border-white/20 rounded-xl"
//     />
//   );
// }

// function InfoCard({ title, children }) {
//   return (
//     <div className="glass p-8 rounded-2xl border border-red-600/20">
//       <h3 className="text-xl font-semibold mb-3">{title}</h3>
//       <p className="opacity-80 leading-relaxed">{children}</p>
//     </div>
//   );
// }







import { useEffect, useRef, useState } from "react";
import { reveal } from "../animations/scroll.gsap";
import SectionTitle from "../components/common/SectionTitle";
import LuxurySelect from "../components/common/LuxurySelect";

export default function Contact() {
  const pageRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const mapRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    message: "",
  });

  useEffect(() => {
    reveal(pageRef.current);
    reveal(formRef.current);
    reveal(infoRef.current);
    reveal(mapRef.current);
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
New Private Inquiry – LuxEstate

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Purpose: ${form.purpose}

Message:
${form.message}
    `;

    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section ref={pageRef} className="pt-32 pb-40">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Private <span className="text-red-600">Consultation</span>
        </h1>
        <p className="text-lg md:text-xl opacity-80">
          Speak directly with our luxury real estate advisors.
        </p>
      </div>

      {/* FORM + INFO */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20">
        {/* FORM */}
        <div
          ref={formRef}
          className="glass p-12 rounded-3xl border border-red-600/30"
        >
          <h2 className="text-3xl font-semibold mb-10">
            Send an Inquiry
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input name="name" placeholder="Full Name" onChange={handleChange} />
            <Input name="email" type="email" placeholder="Email Address" onChange={handleChange} />
            <Input name="phone" placeholder="Phone Number" onChange={handleChange} />

            {/* 🔥 FIXED PURPOSE FIELD */}
            <LuxurySelect
              value={form.purpose}
              onChange={(val) =>
                setForm({ ...form, purpose: val })
              }
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              onChange={handleChange}
              className="w-full p-4 bg-transparent border border-white/20 rounded-xl"
            />

            <button
              type="submit"
              className="
                w-full py-4 text-lg rounded-xl
                border border-green-500 text-green-400
                hover:bg-green-500 hover:text-white transition
              "
            >
              Send via WhatsApp
            </button>

            <p className="text-xs opacity-60 text-center">
              No spam • Private advisors only
            </p>
          </form>
        </div>

        {/* INFO */}
        <div ref={infoRef} className="space-y-10">
          <InfoCard title="Head Office">
            LuxEstate Advisory Group <br />
            Business Bay <br />
            Dubai, UAE
          </InfoCard>

          <InfoCard title="Direct Contact">
            📞 +91 99XX-XXX-XXX <br />
            ✉️ contact@luxestate.com
          </InfoCard>

          <InfoCard title="Business Hours">
            Mon – Fri: 9:00 AM – 7:00 PM <br />
            Sat: 10:00 AM – 4:00 PM
          </InfoCard>
        </div>
      </div>

      {/* MAP (unchanged, already premium) */}
      <div ref={mapRef} className="mt-36 px-6 max-w-6xl mx-auto">
        <SectionTitle
          title="Visit Our Private Office"
          subtitle="A discreet space for confidential meetings"
        />

        <div className="glass p-3 rounded-3xl border border-red-600/20">
          <iframe
            title="LuxEstate Location"
            className="w-full h-[420px] rounded-2xl grayscale"
            src="https://maps.google.com/maps?q=Dubai%20Business%20Bay&t=&z=13&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

/* SMALL COMPONENTS */

function Input({ name, type = "text", placeholder, onChange }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required
      onChange={onChange}
      className="w-full p-4 bg-transparent border border-white/20 rounded-xl"
    />
  );
}

function InfoCard({ title, children }) {
  return (
    <div className="glass p-8 rounded-2xl border border-red-600/20">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="opacity-80">{children}</p>
    </div>
  );
}
