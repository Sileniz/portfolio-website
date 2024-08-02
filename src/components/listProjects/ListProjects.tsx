import Project from "@/components/project/Project"
import projects from "@/utils/projects"
import styles from "./ListProjects.module.css"

export default function ListProject(){
  return (
    <div className={styles.containerProjects}>
      {projects.map((value, index) => (
        <Project src={value.src} text={value.text} key={index} github={value.github}/>
      ))}
    </div>
  )
}