const TeamItem = ({ path, name, tag, anchor }) => {
  return (
    <section>
      <img src={path} alt={name} />
      <div className={tag}>
        <a href={anchor}>
          <span>{name}</span>
        </a>
      </div>
    </section>
  );
};

export default TeamItem;
