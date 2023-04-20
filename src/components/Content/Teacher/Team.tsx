import TEACHER_INFO from "./TeacherInfo";
import TeamItem from "./TeamItem";

const Team = () => {
  return (
    <>
      <section className="team-item">
        {TEACHER_INFO.map((item) => {
          return (
            <TeamItem
              path={item.path}
              name={item.name}
              tag={item.tag}
              anchor={item.anchor}
              key={item.id}
            />
          );
        })}
      </section>
    </>
  );
};

export default Team;
