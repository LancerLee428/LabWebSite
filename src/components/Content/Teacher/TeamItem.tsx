const TeamItem = ({ path, name }) => {
  return (
    <section>
      <img src={path} alt={name} />
      <div className="name">{name}</div>
    </section>
  );
};

export default TeamItem;
