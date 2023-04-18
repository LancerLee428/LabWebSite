import "./index.less";
import Banner from "./Banner";
import FooterMenu from "./FooterMenu";

const Footer = ({ setPath }) => {
  return (
    <>
      <footer className="footer">
        <footer className="inner-footer">
          <Banner />
          <FooterMenu setPath={setPath} />
        </footer>
      </footer>
    </>
  );
};

export default Footer;
