import projects from "../data/projects";
import CaseRow from "./CaseRow";

function WorkSection() {
  return (
    <section className="work" id="arbejde">
      <div className="work-head">
        <h2 className="work-title">Mine projekter</h2>
        <span className="work-years">2025 — 2026</span>
      </div>

      {projects.map((project, index) => (
        <CaseRow index={index} key={project.slug} project={project} />
      ))}
    </section>
  );
}

export default WorkSection;
