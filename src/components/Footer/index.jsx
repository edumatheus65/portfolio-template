import { user } from "../../data/user";
import whatsappIcon from "../../assets/whatsappIcon.png";
import linkedinIcon from "../../assets/linkedinIcon.png";
import githubIcon from "../../assets/githubIcon.png";
import emailIcon from "../../assets/icons-email.png";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer} id="Contact">
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.flexbox}>
            <h2 className="title md">{t("Contato")}</h2>
            <div className={styles.imageContent}>
              <div>
                <a href="https://wa.me/+5511964812565">
                  <img src={whatsappIcon} alt="whatsappIcon" />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/eduardo-matheus-silva-das-neves/">
                  <img src={linkedinIcon} alt="linkedinIcon" />
                </a>
                <span className="paragraph"></span>
              </div>
              <div>
                <a href="https://github.com/edumatheus65">
                  <img src={githubIcon} alt="githubIcon" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.email}>
              <img src={emailIcon} />
              <p className="paragraph">ematheusneves13@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
