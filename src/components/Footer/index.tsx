import "./index.less";
import Banner from "./Banner";
import FooterMenu from "./FooterMenu";
import Earth from "@/common/Earth";

const Footer = ({ setPath }) => {
  return (
    <>
      <footer className="footer">
        <footer className="inner-footer">
          <Banner />
          <FooterMenu setPath={setPath} />
          <Earth />
        </footer>
      </footer>
    </>
  );
};

export default Footer;
