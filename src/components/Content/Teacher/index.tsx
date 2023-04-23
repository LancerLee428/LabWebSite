import "./index.less";
import Title from "./Title";
import Team from "./Team";
import Resume from "./Resume";

const Teacher = () => {
  return (
    <section className="team-container">
      <section className="team">
        <Title />
        <Team />
      </section>
      <section className="team-resume">
        <Resume />
      </section>
    </section>
  );
};

export default Teacher;
