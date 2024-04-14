import styles from "./style.module.css";
import { useTranslation } from "react-i18next";
import euaIcon from "../../assets/euaIcon.png";
import brazilIcon from "../../assets/iconBrazil.png";
import { useContext } from "react";
import { LanguageContext } from "../providers/LanguageContext";
import { DarkMode } from "../DarkMode";

export const Header = () => {
  const { t } = useTranslation();
  const { currentLanguage, toggleLanguage } = useContext(LanguageContext);
 
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <p className={styles.Logo}>EM</p>
          <img
            className={styles.Nation}
            onClick={toggleLanguage}
            src={currentLanguage === "en" ? brazilIcon : euaIcon}
            alt={currentLanguage === "en" ? "Brazil Icon" : "EUA Icon"}
          />
          <DarkMode />

          <div className={styles.links}>
            <a href="#AboutMe" className="nav">
              {t("Sobre")}
            </a>
            <a href="#Stack" className="nav">
              {t("Tecnologias")}
            </a>
            <a href="#Projects" className="nav">
              {t("Projetos")}
            </a>
          </div>        

       
        </div>
      </div>
    </header>
  );
};

export default Header;
