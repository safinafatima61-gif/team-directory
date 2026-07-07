import "./Section.css";
import TeamMember from "../TeamMember/TeamMember";

function Section({ title, members }) {
  return (
    <section className="section">
      <h1>{title}</h1>

      <div className="team-grid">
        {members.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}

export default Section;