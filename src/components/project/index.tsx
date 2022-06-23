import React, { useState } from "react";
import styles from "./index.module.css";
import { IProject } from "../../types/project";
import classNames from "classnames";

interface ProjectProps {
  project: IProject;
  changeTab: (e: React.MouseEvent) => void;
}

const Project: React.FC<ProjectProps> = ({ project, changeTab }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevState) => !prevState);
  };

  return (
    <div className={styles.project}>
      <img
        onClick={handleClick}
        className={classNames(
          styles.image,
          clicked && classNames(styles.clicked)
        )}
        src={project.img}
        alt="project"
      />
      <button
        onClick={changeTab}
        datatype={project.tag}
        className={styles.button}
      >
        {project.tag}
      </button>
      <h2 className={styles.title}>{project.name}</h2>
    </div>
  );
};

export default Project;
