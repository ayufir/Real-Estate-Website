import { useParams } from "react-router-dom";
import { useState } from "react";
import { properties } from "../data/properties.data";
import BrochureList from "../components/property/BrochureList";
import BrochureGateModal from "../components/property/BrochureGateModal";
import VirtualTourModal from "../components/property/VirtualTourModal";
import ROIEMICalculator from "../components/property/ROIEMICalculator";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  const [selectedBrochure, setSelectedBrochure] = useState(null);
  const [openTour, setOpenTour] = useState(false);

  if (!property) {
    return <div className="pt-40 text-center">Property not found</div>;
  }

  return (
    <section className="pt-32 pb-40 max-w-7xl mx-auto px-6">

      {/* HEADER */}
      <h1 className="text-5xl md:text-6xl font-extrabold">
        {property.name}
      </h1>
      <p className="opacity-70 mt-2">{property.location}</p>
      <p className="text-red-600 text-2xl mt-4">{property.price}</p>

      {/* IMAGE */}
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-[450px] object-cover rounded-2xl mt-12"
      />

      {/* DESCRIPTION */}
      <p className="mt-12 text-lg opacity-80 leading-relaxed max-w-4xl">
        {property.longDescription || property.description}
      </p>

      {/* METRICS */}
      <div className="grid md:grid-cols-3 gap-8 mt-14 text-lg">
        <div>📐 Area: {property.area}</div>
        <div>🛏 Bedrooms: {property.beds}</div>
        <div>🛁 Bathrooms: {property.baths}</div>
      </div>

      {/* 360 TOUR */}
      <button
        onClick={() => setOpenTour(true)}
        className="mt-10 px-10 py-4 border border-red-600 rounded-xl
        text-red-500 hover:bg-red-600 hover:text-white transition"
      >
        View 360° Virtual Tour
      </button>

      {/* BROCHURES */}
      <div className="mt-28">
        <h2 className="text-4xl font-bold mb-6">
          Investment <span className="text-red-600">Documents</span>
        </h2>

        <BrochureList
          brochures={property.brochures}
          onSelect={setSelectedBrochure}
        />
      </div>

      {/* ROI + EMI */}
      <ROIEMICalculator price={property.priceValue} />

      {/* MODALS */}
      <BrochureGateModal
        open={!!selectedBrochure}
        brochure={selectedBrochure}
        onClose={() => setSelectedBrochure(null)}
      />

      <VirtualTourModal
        open={openTour}
        onClose={() => setOpenTour(false)}
        image={property.virtualTourImage}
      />
    </section>
  );
}
