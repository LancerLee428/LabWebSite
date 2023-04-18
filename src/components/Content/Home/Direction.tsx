import DIRECTION_INFO from "./DirectionInfo";
import DirectCar from "./DirectCar";

const Direction = () => {
  return (
    <>
      <section className="direction">
        <section className="direction-title">
          <section className="direction-head-en">RESEARCH DIRECTION</section>
          <section className="direction-head">研究方向</section>
        </section>
        <section className="car-layout">
          {DIRECTION_INFO.map((item) => {
            return (
              <DirectCar
                menuLogo={item.logo}
                menuName={item.name}
                menuContent={item.content}
                key={item.id}
              />
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Direction;
