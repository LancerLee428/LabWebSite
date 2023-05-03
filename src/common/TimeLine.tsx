import "./timeline.less";

const TimeLine = ({ content }) => {
  return (
    <section className="time-line">
      <article>
        <dl>
          {content.map((item) => {
            return (
              <div className="cell">
                <div className="cell-content">
                  <dt>{item.title}</dt>
                  <dd>{item?.content1}</dd>
                  <dd>{item?.content2}</dd>
                  <dd>{item?.content3}</dd>
                </div>
              </div>
            );
          })}
        </dl>
      </article>
    </section>
  );
};

export default TimeLine;
