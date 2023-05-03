import TimeLine from "@/common/TimeLine";
import RESUMEINFO from "@/assets/info/resumeInfo";

const Resume = () => {
  return (
    <section className="resume-container">
      <section className="tag-resume">
        {RESUMEINFO.map((item) => {
          const { id, imgSrc, name, email, key, content } = item;
          return (
            <>
              <section id={id}>
                <section className="resume-left">
                  <img src={imgSrc} alt="" />
                  <div className="name-en">{name}</div>
                  <div className="email">{email}</div>
                </section>
                <section className="resume-right">
                  <TimeLine key={key} content={content} />
                </section>
              </section>
            </>
          );
        })}
      </section>
    </section>
  );
};

export default Resume;
