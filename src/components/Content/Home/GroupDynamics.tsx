const GroupDynamics = () => {
  return (
    <section className="dynamic-news">
      <section className="new-en">NEWS</section>
      <section className="new">组内动态</section>
      <section className="list">
        {/* 此处暂时写死，最好是解析后端文件，不要直接交给前端 */}
        <ul>
          <li>
            <a href="">
              <span>2023年研究生招生信息</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>2022年年度总结</span>
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default GroupDynamics;
