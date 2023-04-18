import { useNavigate } from "react-router-dom";

const MenuItem = ({ path, setPath, menuName }) => {
  const navigate = useNavigate();
  return (
    <header
      className="footer-menu-item"
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
