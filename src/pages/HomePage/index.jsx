import { useState } from "react";
import { AboutMe } from "../../components/AboutMe";
import { BannerSection } from "../../components/BannerSection";
import { CarrouselSection } from "../../components/Carrousel";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { LocationSection } from "../../components/LocationSection";
import { TecnologySection } from "../../components/TecnologySection";
import { projects } from "../../data/projects";
import { ViewDetailsModal } from "../../components/Modals/ViewDetailsModal";

export const HomePage = () => {
  const [selectedProject, setSelectedProject] = useState(null); // Estado para armazenar o projeto selecionado
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a abertura do modal

  const handleProjectDetailsClick = (project) => {
    setSelectedProject(project); // Armazena o projeto selecionado no estado
    setIsModalOpen(true); // Abre o modal
  };

  const handleCloseModal = () => {
    setSelectedProject(null); // Limpa o projeto selecionado
    setIsModalOpen(false); // Fecha o modal
  };
  return (
    <>
      <DefaultTemplate>
        <BannerSection />
        <AboutMe />
        <TecnologySection />
        {/* <ProjectSection /> */}
        <CarrouselSection
          handleProjectDetailsClick={handleProjectDetailsClick}
        />
        <LocationSection />
      </DefaultTemplate>
      {isModalOpen &&
        selectedProject && ( // Renderiza o modal se isModalOpen for true e houver um projeto selecionado
          <ViewDetailsModal
            projects={projects}
            project={selectedProject}
            onClose={handleCloseModal}
          />
        )}
    </>
  );
};
