import { username } from "../../data/user";
import profileImage from "../../assets/profileImg.jpg";
import styles from "./style.module.css";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";
import curriculum from "../../assets/Currículo Bernardo.pdf";

export const BannerSection = () => {
  const { t } = useTranslation();

  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = curriculum;
    link.download = "Currículo_Bernardo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.bannerInfo}>
          <div className={styles.bannerContent}>
            <span className="username">{username}</span>
            <h1 className="title lg">{t("BemVindo")}</h1>
            <p className="paragraph ">
              <Typewriter
                options={{
                  strings: [t("Apresentacao")],
                  autoStart: true,
                  loop: true,
                  delay: 2,
                }}
              />
            </p>
            <div className={styles.btn}>
              <button className="btn" onClick={handleDownloadCv}>
                {t("Download")}
              </button>
              <a href="#Contact">
                <button className="btn_outline">{t("Contato")}</button>
              </a>
            </div>
          </div>
          <img src={profileImage} alt="ProfileImage"></img>
        </div>
      </div>
    </section>
  );
};
