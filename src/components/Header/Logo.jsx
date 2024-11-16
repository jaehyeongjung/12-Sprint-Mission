import logoPC from "../../assets/img/common/logo_full.svg";
import logoMobile from "../../assets/img/common/logo_text.svg";
import styles from "./styles.module.scss";

export default function Logo() {
  return (
    <h1 className={styles.logo}>
      <a href="/">
        <img className={styles["logo-pc"]} src={logoPC} alt="판다마켓" />
        <img
          className={styles["logo-mobile"]}
          src={logoMobile}
          alt="판다마켓"
        />
      </a>
    </h1>
  );
}
