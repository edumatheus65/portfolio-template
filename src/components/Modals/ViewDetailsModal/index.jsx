import { IoCloseSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import gitHubSymbol from "../../../assets/githubSymbol.svg";
import rocketIcon from "../../../assets/rockectIcon.png";

export const ViewDetailsModal = ({ projects, project, onClose }) => {
  const { t } = useTranslation();

  const selectedProject = projects.find((p) => p.id === project.id);
  const descriptionKey = `project${selectedProject.id}Description`;

  return (
    <div className={styles.modalOverlay} role="dialog">
      <div className={styles.modalBox}>
        <div className={styles.ModalHeaders}>
          <h3 className="title headersModal">{t("Detalhes")}</h3>
          <button
            title="fechar"
            aria-label="close"
            className="iconsBtn"
            onClick={onClose}
          >
            <IoCloseSharp size={22} />
          </button>
        </div>
        <div className={styles.texts}>
          <h2 className="title modal">{selectedProject.name}</h2>
          <p className="paragraph">{t(descriptionKey)}</p>{" "}
          <h3 className="title modal two">{t("Tecnologias")}:</h3>
        </div>
        <div className={styles.techInfo}>
          <ul className={styles.techList}>
            {selectedProject.techs.map((tech, index) => (
              <li className={styles.techItem} key={index}>
                <p className="paragraph techs">{tech}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.links}>
          <a href={selectedProject.repositoryLink} target="blank">
            <img src={gitHubSymbol} />
          </a>
          <a href={selectedProject.applicationLink} target="blank">
            <img src={rocketIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};
