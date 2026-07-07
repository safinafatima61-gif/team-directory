import "./TeamMember.css";
import Card from "../Card/Card";
import SkillBadge from "../SkillBadge/SkillBadge";

function TeamMember({ member }) {
  return (
    <Card>
      <h2>{member.name}</h2>

      <p><strong>Role:</strong> {member.role}</p>

      <p><strong>Age:</strong> {member.age}</p>

      <p><strong>City:</strong> {member.address.city}</p>

      <p><strong>Country:</strong> {member.address.country}</p>

      <p>
        <strong>Admin:</strong>{" "}
        {member.isAdmin ? "Yes" : "No"}
      </p>

      <div>
        <strong>Skills:</strong>
        <br />

        {member.skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
    </Card>
  );
}

export default TeamMember;