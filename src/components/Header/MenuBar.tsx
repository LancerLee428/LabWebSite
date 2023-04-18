import MENU_INFO from "./MenuInfo";
import MenuItem from "./MenuItem";

const MenuBar = ({ setPath }) => {
  return (
    <header className="menu">
      {MENU_INFO.map((item) => {
        return (
          <MenuItem
            menuName={item?.label}
            path={item?.path}
            setPath={setPath}
            key={item.id}
            index={item.id}
          />
        );
      })}
    </header>
  );
};

export default MenuBar;
