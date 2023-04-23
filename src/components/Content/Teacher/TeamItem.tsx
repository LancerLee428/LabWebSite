const TeamItem = ({ id, ...props }) => {
  return (
    <section>
      <div className="box">
        <div className="cover"></div>
        <img src={props.path} alt={props.name} />
      </div>
      <div className={props.tag}>
        <a href={props.anchor}>
          <span>{props.name}</span>
        </a>
      </div>
    </section>
  );
};

export default TeamItem;
