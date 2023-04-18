const DirectCar = ({ menuLogo, menuName, menuContent }) => {
  return (
    <section className="direction-car">
      <div className="car-content">
        <img src={menuLogo} alt="" />
        <div className="car-name">{menuName}</div>
        <div className="direction-content">{menuContent}</div>
      </div>
    </section>
  );
};

export default DirectCar;
