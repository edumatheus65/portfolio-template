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
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectDetailsClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };
  return (
    <>
      <DefaultTemplate>
        <BannerSection />
        <AboutMe />
        <TecnologySection />
        <CarrouselSection
          handleProjectDetailsClick={handleProjectDetailsClick}
        />
        <LocationSection />
      </DefaultTemplate>
      {isModalOpen && selectedProject && (
        <ViewDetailsModal
          projects={projects}
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
