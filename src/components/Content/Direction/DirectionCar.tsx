import DIRECTION_INFO from "@/assets/info/DirectionInfo";
import DirectCar from "@/common/DirectCar";

const DirectionCar = () => {
  return (
    <>
      <section className="dc-title">
        <section className="dc-head-en">RESEARCH DIRECTION</section>
        <section className="dc-head">研究方向</section>
      </section>
      <section className="dc-layout">
        {DIRECTION_INFO.map((item) => {
          return <DirectCar {...item} key={item.id} />;
        })}
      </section>
    </>
  );
};

export default DirectionCar;
