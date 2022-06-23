import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Tabs from "../tabs";
import { projectsData } from "../../data/projects.js";
import Project from "./index";
import classNames from "classnames";
import { IProject } from "../../types/project";
import ProjectTabs from "../../types/project/ProjectTabs";
import { nanoid } from "nanoid";

const ProjectList = () => {
  const [tab, setTab] = useState<ProjectTabs>("Show All");
  const [projects, setProjects] = useState<IProject[]>(projectsData);
  const [idx, setIdx] = useState<number>(1);
  const [filteredProjects, setFilteredProjects] =
    useState<IProject[]>(projectsData);

  const tabs: ProjectTabs[] = [
    "Show All",
    "Design",
    "Branding",
    "Illustration",
    "Motion",
  ];

  const changeTab = (e: React.MouseEvent) => {
    const tabName = (e.target as HTMLDivElement).getAttribute("datatype");
    if (tabName !== null) {
      setTab(tabName as ProjectTabs);
    }
  };

  const changeTabBySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTab(e.target.value as ProjectTabs);
  };

  const loadMore = () => {
    const newProjects = projectsData.map((project) => ({
      ...project,
      name: project.name.includes("#")
        ? project.name.replace(/#[0-9]/, `#${idx}`)
        : project.name + `#${idx}`,
    }));
    setProjects((prevState) => prevState.concat(newProjects));
    setIdx((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (tab === "Show All") {
      return setFilteredProjects(projects);
    }
    const newProjects = projects.filter((project) => project.tag === tab);
    setFilteredProjects(newProjects);
  }, [projects, tab]);

  return (
    <div className={styles.container}>
      <Tabs
        changeTabBySelect={changeTabBySelect}
        changeTab={changeTab}
        tabs={tabs}
        activeTab={tab}
      />
      <div className={classNames(styles.projects, styles.wrapper)}>
        {filteredProjects.map((project) => {
          return (
            <Project changeTab={changeTab} key={nanoid()} project={project} />
          );
        })}
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={loadMore} className={styles.loadButton}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default ProjectList;
