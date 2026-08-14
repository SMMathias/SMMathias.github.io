/* Positioner og float-timings er 1:1 fra designet. */
const TAGS = [
  { label: "Interfacedesign", style: { top: "4%", left: "4%" }, duration: 6.4, delay: 0 },
  { label: "UX & IA", style: { top: "21%", left: 0 }, duration: 7.6, delay: 0.8 },
  { label: "Prototyping", style: { top: "40%", left: "7%" }, duration: 5.8, delay: 0.3, variant: "blue" },
  { label: "Frontend", style: { top: "59%", left: "1%" }, duration: 8.2, delay: 1.4 },
  { label: "Identitet", style: { top: "78%", left: "8%" }, duration: 6.8, delay: 0.6 },
  { label: "Copywriting", style: { top: "9%", right: "5%" }, duration: 7.2, delay: 1.1 },
  { label: "React", style: { top: "30%", right: 0 }, duration: 6.2, delay: 0.2, variant: "light" },
  { label: "Supabase", style: { top: "51%", right: "6%" }, duration: 8.6, delay: 1.7, variant: "light" },
  { label: "Figma", style: { top: "73%", right: "2%" }, duration: 7, delay: 0.9, variant: "light" },
];

function ToolsSection() {
  return (
    <section className="tools" id="vaerktoejer">
      <h2 className="tools-title">Værktøjer</h2>

      <div className="tools-stage">
        <img
          alt="Figur af Mathias siddende med en bærbar"
          className="tools-figure"
          height={1434}
          loading="lazy"
          src={`${import.meta.env.BASE_URL}mathias-figur-laptop.webp`}
          width={640}
        />
        {TAGS.map((tag) => (
          <span
            className={tag.variant ? `tool-tag ${tag.variant}` : "tool-tag"}
            key={tag.label}
            style={{
              ...tag.style,
              animationDuration: `${tag.duration}s`,
              animationDelay: `${tag.delay}s`,
            }}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </section>
  );
}

export default ToolsSection;
