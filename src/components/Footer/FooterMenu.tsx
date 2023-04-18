import MENU_INFO from "../Header/MenuInfo";
import MenuItem from "./MenuItem";

const FooterMenu = ({ setPath }) => {
  return (
    <>
      <footer className="footer-menu">
        {MENU_INFO.map((item) => {
          return (
            <MenuItem
              menuName={item?.label}
              path={item?.path}
              setPath={setPath}
              key={item.id}
            />
          );
        })}
      </footer>
    </>
  );
};

export default FooterMenu;
