import { useNavigate } from "react-router-dom";

const MenuItem = ({ path, index, setPath, menuName }) => {
  const navigate = useNavigate();
  return (
    <header
      className="menu-item"
      tabIndex={index}
      onClick={() => {
        setPath(path);
        navigate(path);
      }}
    >
      {menuName}
    </header>
  );
};

export default MenuItem;
