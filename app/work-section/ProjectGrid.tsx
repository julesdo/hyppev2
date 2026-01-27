"use client";
import ProjectCard from "./ProjectCard";
import { devProjects, ProjectProps } from "./projectDetails";

const ProjectGrid = () => {
  return (
    <div className="flex w-[90%] flex-col gap-6 md:gap-8 lg:max-w-[1200px] lg:gap-10">
      {devProjects.map((project: ProjectProps) => (
        <ProjectCard
          id={project.id}
          key={project.id}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
          github={project.github}
          demo={project.demo}
          image={project.image}
          available={project.available}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
