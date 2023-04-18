import "./index.less";
import Direction from "./Direction";
import GroupDynamics from "./GroupDynamics";
import Leader from "./Leader";

const HomeContent = () => {
  return (
    <section>
      <GroupDynamics />
      <Leader />
      <Direction />
    </section>
  );
};

export default HomeContent;
