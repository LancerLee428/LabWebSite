import "./timeline.less";

const TimeLine = () => {
  return (
    <section className="time-line">
      <article>
        <dl>
          <div className="cell">
            <div className="cell-content">
              <dt>1988-1992</dt>
              <dd>山东矿业学院获矿山测量专业学士学位</dd>
              <dd>山东岱庄生建煤矿从事测量与制图工作</dd>
            </div>
          </div>
          <div className="cell">
            <div className="cell-content">
              <dt>1995</dt>
              <dd>中国矿业大学(北京)硕士毕业</dd>
              <dd>获大地测量学与测量工程专业工学硕士学位</dd>
              <dd>并留校任教</dd>
            </div>
          </div>
          <div className="cell">
            <div className="cell-content">
              <dt>2002</dt>
              <dd>中国矿业大学(北京)博士毕业</dd>
              <dd>获大地测量学与测量工程专业工学博士学位</dd>
            </div>
          </div>
          <div className="cell">
            <div className="cell-content">
              <dt>2002.12</dt>
              <dd>晋升副教授</dd>
            </div>
          </div>
          <div className="cell">
            <div className="cell-content">
              <dt>2008.07</dt>
              <dd>晋升教授</dd>
            </div>
          </div>
          <div className="cell">
            <div className="cell-content">
              <dt>2004.01-2009.06</dt>
              <dd>担任测绘与土地系副主任</dd>
            </div>
          </div>
          <div className="cell">
            <div className="cell-content">
              <dt>2009.07-2015.06</dt>
              <dd>遥感与地理信息系主任</dd>
            </div>
          </div>
        </dl>
      </article>
    </section>
  );
};

export default TimeLine;
