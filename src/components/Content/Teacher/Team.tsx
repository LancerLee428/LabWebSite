import TEACHER_INFO from "./TeacherInfo";
import TeamItem from "./TeamItem";

const Team = () => {
  return (
    <>
      <section className="team-item">
        {TEACHER_INFO.map((item) => {
          return <TeamItem key={item.id} {...item} />;
        })}
      </section>
    </>
  );
};

export default Team;
