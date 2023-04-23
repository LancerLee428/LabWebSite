const TeamItem = ({ path, name, tag, anchor }) => {
  return (
    <section>
      <div className="box">
        <div className="cover"></div>
        <img src={path} alt={name} />
      </div>
      <div className={tag}>
        <a href={anchor}>
          <span>{name}</span>
        </a>
      </div>
    </section>
  );
};

export default TeamItem;
