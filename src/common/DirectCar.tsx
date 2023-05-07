import "./directioncar.less";

const DirectCar = ({ id, ...props }) => {
  return (
    <section className="direction-car">
      <div className="car-content">
        <img src={props.logo} alt="" />
        <div className="car-name">{props.name}</div>
        <div className="direction-content">{props.content}</div>
      </div>
    </section>
  );
};

export default DirectCar;
