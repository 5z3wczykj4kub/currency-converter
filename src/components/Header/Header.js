import styles from "./Header.module.scss";

import logo from "../../assets/images/logo/logo.png";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="logo" />
      <h1>Kantor</h1>
    </nav>
  );
};

export default Header;
