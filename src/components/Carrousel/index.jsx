import { motion } from "framer-motion";
import styles from "./style.module.css";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../../data/projects";

export const CarrouselSection = ({ handleProjectDetailsClick }) => {
  const { t } = useTranslation();
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <section className="section_padding">
      <div className="container">
        <h2 className="title md">{t("Projetos")}</h2>
        <div className={styles.carrousel}>
          <motion.div
            className={styles.carrouselDiv}
            whileTap={{ cursor: "grabbing" }}
            ref={carousel}
          >
            <motion.div
              className={styles.inner}
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {projects.map((project) => (
                <motion.div className={styles.item} key={project.id}>
                  <img src={project.image} alt="carrousel images" />
                  <div className={styles.anchor}>
                    <a
                      target="_blank"
                      className={`anchor ${styles.details}`}
                      onClick={() => handleProjectDetailsClick(project)}
                    >
                      {t("VerDetalhes")}
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
