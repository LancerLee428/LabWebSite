import ld from "@/assets/img/zxs.jpg";

const Leader = () => {
  return (
    <section className="lab-leader">
      <section className="leader-title">
        <section className="leader-head-en">RESEARCH LEADER</section>
        <section className="leader-head">负责人简介</section>
      </section>
      <section className="leader-content">
        <section className="image">
          <img src={ld} alt="赵老师照片" className="leader-img" />
        </section>
        <section className="resume">
          <div className="name">赵学胜</div>
          <div className="title">
            中国矿业大学（北京）教授、博士生导师，曾任地测学院遥感与地理信息系主任，地理空间信息化实验室负责人，
          </div>
          <div className="experience">
            <div className="work">
              1995年获得中国矿业大学(北京)获大地测量学与测量工程专业工学硕士学位并留校任教，2002年获得中国矿业大学(北京)获大地测量学与测量工程专业工学博士学位，
              2002年晋升副教授，2008年晋升教授。
              国家自然科学基金重点项目、面上项目、国家重点研发计划专题及企业委托项目等30余项
              获省部级科技进步奖3项。
            </div>
            <div className="interest">
              主要从事“数字地球空间建模”,“时空GIS理论与方法”,“遥感影像融合与分析等方面的教学与研究”。
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Leader;
