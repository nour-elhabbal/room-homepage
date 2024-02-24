import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <a href="#" className="logo">
        room
      </a>
      <nav>
        <a href="#">home</a>
        <a href="#">shop</a>
        <a href="#">about</a>
        <a href="#">contact</a>
      </nav>
    </div>
  );
};

export default Header;
