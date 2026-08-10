import "./Project.css";
import { ProjectType } from "../../assets/types/types";

export default function Project({ title, image, imageAltText }: ProjectType) {
  return (
    <div className="project-card carousel__slide">
      <div className="project-hero">
        <img className="project-img" src={image} alt={imageAltText} />
      </div>
      <div className="project-card-content">
        <div className="project-tags">
          <span className="project-tag">React</span>
          <span className="project-tag">TypeScript</span>
          <span className="project-tag">CSS</span>
        </div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
