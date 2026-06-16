import "./Project.css";
import { ProjectType } from "../../assets/types/types";

export default function Project({ title, description, image, imageAltText }: ProjectType) {
  return (
    <div className="project-card">
      <div className="project-hero">
        <img className="project-img" src={image} alt={imageAltText} />
      </div>
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
