import { NavLink } from "react-router-dom";

// -- Header component
const Header = () => {
  const navStyle = {
    height: "60px",
    width: "100%",
    backgroundColor: "#111111",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  };

  const borderDiv = {
    height: "30px",
    width: "100%",
    backgroundColor: "#010101",
    textAlign: "right",
    color: "#525252",
    padding: "5px",
  };
  const styles = ({ isActive }) => {
    if (isActive) {
      return {
        color: "#FED230",
        fontSize: "18px",
        fontWeight: "600",
        textDecoration: "none",
        letterSpacing: 3,
      };
    } else {
      return {
        color: "#FFFFFF",
        fontSize: "18px",
        fontWeight: "600",
        textDecoration: "none",
        letterSpacing: 3,
      };
    }
  };

  return (
    <>
      <div style={{ position: "sticky", top: 0, left: 0 }}>
        <div style={borderDiv}>@Stylish-Developer</div>
        <nav style={navStyle}>
          <div></div>
          <NavLink to="/" style={styles}>
            Home
          </NavLink>
          <NavLink to="fundamental-concepts" style={styles}>
            Fundamentals
          </NavLink>
          <NavLink to="advance-concepts" style={styles}>
            Advance
          </NavLink>
          <NavLink to="hooks-concepts" style={styles}>
            Hooks
          </NavLink>
          <div></div>
        </nav>
      </div>
    </>
  );
};

export default Header;
