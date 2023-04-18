import Banner from "./Banner";
import MenuBar from "./MenuBar";
import Title from "./Title";

import "./index.less";

const Header = ({ setPath }) => {
  return (
    <>
      <header className="header">
        <header className="inner-header">
          <Title />
          <MenuBar setPath={setPath} />
        </header>
        <Banner />
      </header>
    </>
  );
};

export default Header;
