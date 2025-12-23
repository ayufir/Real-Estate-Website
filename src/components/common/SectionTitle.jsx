export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold">{title}</h2>
      <p className="opacity-70 mt-4">{subtitle}</p>
    </div>
  );
}
